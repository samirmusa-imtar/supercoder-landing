# Deploy Supercoder Landing to AWS Lightsail

Cost: **$3.50–5/month** (fixed)

---

## Step 1: Create Lightsail Instance

1. Go to [AWS Lightsail Console](https://lightsail.aws.amazon.com/)
2. Click **Create instance**
3. Choose **Instance location** (closest to your users, e.g. US East)
4. Under **Platform**: select **Linux/Unix**
5. Under **Blueprint**: select **OS Only** → **Ubuntu 22.04**
6. Under **Instance plan**: select **$3.50** (512 MB) or **$5** (1 GB, recommended)
7. **Instance name**: `supercoder-landing`
8. Click **Create instance**

---

## Step 2: Add Static IP (recommended)

1. Click your instance → **Networking** tab
2. Click **Create static IP**
3. Name: `supercoder-landing-ip`
4. Click **Create**
5. Note the IP address (e.g. `3.xxx.xxx.xxx`)

---

## Step 3: Open Ports

1. Instance → **Networking** → **Firewall**
2. Add rules:
   - **HTTP** (port 80)
   - **HTTPS** (port 443) — if you add SSL later
   - **SSH** (22) — usually enabled by default

---

## Step 4: Connect via SSH

1. Click the **Terminal** icon on your instance (or use SSH with the .pem key)
2. Or download the default SSH key from the account dropdown and use:
   ```
   ssh -i LightsailDefaultKey.pem ubuntu@YOUR_STATIC_IP
   ```

---

## Step 5: Install Node.js, PM2, and Nginx

Run these commands on the instance:

```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js 20.x
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Verify (should show v20.x)
node -v
npm -v

# Install PM2 (process manager)
sudo npm install -g pm2

# Install Nginx (reverse proxy)
sudo apt install nginx -y
```

---

## Step 6: Clone and Build Your App

```bash
# Clone from GitHub
cd ~
git clone https://github.com/samirmusa-imtar/supercoder-landing.git
cd supercoder-landing

# Install dependencies
npm ci

# Build for production
npm run build
```

---

## Step 7: Update PM2 Config Path

The `ecosystem.config.js` expects the app at `/home/ubuntu/supercoder-landing`. If your path differs, edit it:

```bash
nano ecosystem.config.js
# Change cwd to your actual path (e.g. /home/ubuntu/supercoder-landing)
```

---

## Step 8: Start App with PM2

```bash
cd ~/supercoder-landing
pm2 start ecosystem.config.js

# Make PM2 start on server reboot
pm2 startup
# Run the command it outputs (starts with sudo env...)
pm2 save
```

Verify: `pm2 status` should show `supercoder-landing` as **online**.

---

## Step 9: Configure Nginx

```bash
sudo nano /etc/nginx/sites-available/default
```

**Replace** the `server` block with:

```nginx
server {
    listen 80 default_server;
    listen [::]:80 default_server;
    server_name _;
    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Then:

```bash
sudo nginx -t
sudo systemctl restart nginx
```

---

## Step 10: Test

Open your browser: `http://YOUR_STATIC_IP`

You should see the Supercoder landing page.

---

## Updating the App (After Code Changes)

```bash
cd ~/supercoder-landing
git pull
npm ci
npm run build
pm2 restart supercoder-landing
```

---

## Optional: Custom Domain & SSL

1. Point your domain (e.g. `supercoder.imtar.com`) to your static IP via DNS A record.
2. Install Certbot:
   ```bash
   sudo apt install certbot python3-certbot-nginx -y
   sudo certbot --nginx -d yourdomain.com
   ```
3. Certbot will configure HTTPS for you.

---

## Troubleshooting

| Issue | Fix |
|-------|-----|
| 502 Bad Gateway | App not running: `pm2 restart supercoder-landing`, check `pm2 logs` |
| Connection refused | Nginx not running: `sudo systemctl restart nginx` |
| Build fails | Ensure Node 18+: `node -v`, run `npm run build` locally first |
| Out of memory | Upgrade to $5 (1 GB) plan |
