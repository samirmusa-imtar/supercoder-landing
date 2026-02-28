# Supercoder AI — Production Deployment (Backend + DevOps)

This document covers deploying and maintaining the production backend (lead persistence, API security, email, admin export) on AWS Lightsail. For initial instance setup, see [DEPLOY-LIGHTSAIL.md](DEPLOY-LIGHTSAIL.md).

---

## 1. Prerequisites

- Lightsail Ubuntu instance (512MB+ RAM, 1GB swap recommended)
- Node 20, PM2, Nginx installed
- App repo at `/home/ubuntu/supercoder-landing`

---

## 2. Production Deployment Checklist

### First-time setup

1. **Clone / pull latest**
   ```bash
   cd /home/ubuntu/supercoder-landing
   git pull origin master
   ```

2. **Install dependencies**
   ```bash
   npm ci
   ```

3. **Environment**
   ```bash
   cp .env.example .env
   nano .env   # set DATABASE_URL, ADMIN_API_TOKEN, SES_* or SMTP_*
   ```
   - `DATABASE_URL`: use `file:./prisma/dev.db` (relative to project root) or absolute path.
   - `ADMIN_API_TOKEN`: long random string for `GET /api/admin/leads` (Bearer token).

4. **Database**
   ```bash
   npx prisma generate
   npx prisma migrate deploy
   ```
   This creates the SQLite file (e.g. `prisma/dev.db`). **Run this before the first request** so `/api/health` and the lead form work. If you start the app without running migrations, health will return 503 and lead submissions will fail.

5. **Build**
   ```bash
   npm run build
   ```

6. **PM2**
   ```bash
   pm2 start ecosystem.config.js
   pm2 save
   pm2 startup   # run the printed sudo command to enable on reboot
   ```

7. **Nginx**
   ```bash
   sudo cp /home/ubuntu/supercoder-landing/scripts/nginx-default.conf /etc/nginx/sites-available/default
   sudo nginx -t
   sudo systemctl reload nginx
   ```

8. **Verify**
   - `curl http://localhost:3000/api/health` → `{"status":"ok","db":"connected"}`
   - Submit demo form on site; check DB: `npx prisma studio` or SQLite file.

### Subsequent deploys (zero-downtime)

```bash
cd /home/ubuntu/supercoder-landing
git pull origin master
npm ci
npx prisma generate
npx prisma migrate deploy
npm run build
pm2 reload supercoder-landing
```

---

## 3. Backup Strategy

**Daily SQLite backup**

1. Make script executable: `chmod +x /home/ubuntu/supercoder-landing/scripts/backup-leads.sh`
2. Add cron: `crontab -e` and add:
   ```cron
   0 2 * * * /home/ubuntu/supercoder-landing/scripts/backup-leads.sh
   ```
3. Backups go to `/home/ubuntu/backups/` (create dir if needed). Last 30 files kept.

**Lightsail snapshot**

- Before major upgrades or monthly: Lightsail console → Instance → Create snapshot.
- Use snapshot to restore or clone the instance.

---

## 4. Server Hardening (optional)

Run once, after confirming SSH key access:

```bash
chmod +x /home/ubuntu/supercoder-landing/scripts/server-hardening.sh
sudo /home/ubuntu/supercoder-landing/scripts/server-hardening.sh
```

This configures: SSH (no password, key-only), UFW (22, 80, 443), fail2ban (sshd), unattended security updates, swap persistence.

---

## 5. PM2 Logs and Log Rotation

- Logs: `~/.pm2/logs/supercoder-landing-*.log`
- Rotate: `pm2 install pm2-logrotate` then configure (e.g. max size 10M, retain 7).

---

## 6. Admin Export

- Endpoint: `GET /api/admin/leads`
- Auth: `Authorization: Bearer <ADMIN_API_TOKEN>`
- Example: `curl -H "Authorization: Bearer YOUR_TOKEN" https://your-domain/api/admin/leads -o leads.csv`
- Rate limited (30 req / 5 min per IP).

---

## 7. Scaling Roadmap

| Phase | Setup | When |
|-------|--------|------|
| **1 (current)** | Single Lightsail, SQLite, in-memory rate limit, PM2 | Low traffic |
| **2** | Bigger instance (1GB) or move to Amplify; same code; optional: RDS (Postgres) by switching Prisma provider + migrations | Growth or need for multi-instance |
| **3** | ECS/Fargate or Amplify + RDS + Redis for rate limit | High traffic / HA |

---

## 8. PDPL / Compliance Notes

- **Consent:** Stored with each lead (`consent` boolean). API returns 400 if consent is not true.
- **Retention:** Recommended: delete or anonymize leads after 24 months. Optional cron or script: delete records where `createdAt` older than `LEAD_RETENTION_MONTHS` (env). Implement in a small script or Prisma one-off and run via cron.
- **Data residency:** Server in Frankfurt (eu-central-1); lead data is stored there. Mention in privacy policy and contracts.
- **Privacy policy:** Update the site’s privacy policy (link in footer) to state: lead data is stored on our servers (EU), used for sales contact and follow-up, retention period, and that consent is recorded.

---

## 9. Health and Monitoring

- **Health:** `GET /api/health` returns `{ "status": "ok", "db": "connected" }` or 503. Use for uptime checks or load balancer.
- **Monitoring:** Optional: Netdata (one-line install) on a non-public port, or external uptime checker hitting `/api/health`.

---

## 10. Troubleshooting

| Issue | Check |
|-------|--------|
| 502 Bad Gateway | `pm2 status` and `pm2 logs supercoder-landing`; ensure app is listening on 3000. |
| Leads not saving | `DATABASE_URL` set; `prisma migrate deploy` run; disk space. |
| Email not sending | SES/SMTP env vars; SES sandbox (verify sender/recipient); check logs for `[email]`. |
| Admin 401 | `ADMIN_API_TOKEN` matches request header. |
| Rate limit 429 | Wait for window to reset or adjust limits in `lib/rateLimit.ts`. |
