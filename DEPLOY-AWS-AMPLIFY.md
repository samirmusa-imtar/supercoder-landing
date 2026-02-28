# Deploy Supercoder Landing to AWS Amplify

## What You Need

### 1. Git repository (required)
AWS Amplify deploys via **Git-based continuous deployment** only. Push your code to:
- **GitHub**
- **GitLab**
- **Bitbucket**
- **AWS CodeCommit**

### 2. Repository structure
- **If repo root = `supercoder-landing`**: Keep `amplify.yml` in the root. ✅ Ready.
- **If repo root = parent folder** (e.g. `suppercoder` with `supercoder-landing` inside): In Amplify console, set **App build specification** → **Monorepo** → `appRoot`: `supercoder-landing`.

### 3. `amplify.yml` (already added)
This file configures the build. Amplify auto-detects Next.js, but the included `amplify.yml` explicitly sets:
- `npm ci` (install)
- `npm run build`
- `baseDirectory: .next` (Next.js SSR output)

---

## Deploy Steps

### Step 1: Push to Git
```bash
cd supercoder-landing
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-repo-url>
git push -u origin main
```

### Step 2: Connect in AWS Amplify Console

1. Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
2. **Create new app** → **Host web app**
3. Choose your Git provider (GitHub, GitLab, Bitbucket, CodeCommit)
4. Authorize and select your repository
5. Select branch (e.g. `main` or `master`)
6. Amplify will detect Next.js; the `amplify.yml` in the repo will be used
7. **Create and use a new service role** (or use an existing one)
8. Click **Save and deploy**

### Step 3: First build
Amplify will:
1. Clone the repo
2. Run `npm ci`
3. Run `npm run build`
4. Deploy the `.next` output with SSR support

---

## Requirements Checklist

| Item | Status |
|------|--------|
| Next.js 12–15 | ✅ You have 14.2.18 |
| `package.json` with `"build": "next build"` | ✅ |
| `amplify.yml` with `baseDirectory: .next` | ✅ Added |
| Git repository | ⬜ You provide |
| AWS account | ⬜ You provide |

---

## Optional: Environment Variables

If you add env vars (e.g. for the lead API, analytics):

1. Amplify Console → Your app → **Hosting** → **Environment variables**
2. Add key/value pairs
3. Rebuild the app

---

## Optional: Custom Domain

1. Amplify Console → Your app → **Hosting** → **Custom domains**
2. Add domain and follow DNS instructions
3. Amplify provides an SSL certificate via AWS Certificate Manager

---

## Support for Your App

- **Next.js App Router** ✅
- **API routes** (`/api/lead`) ✅
- **SSR / static pages** ✅
- **Node.js 18+** (Amplify default) ✅

---

## Troubleshooting

| Issue | Fix |
|-------|-----|
| Build fails on `npm ci` | Ensure `package-lock.json` is committed |
| Wrong app root | Set `appRoot` in Amplify if using a monorepo |
| Out of memory | Amplify build may need more memory; check build logs |
| API route 404 | Verify `baseDirectory` is `.next` (not `out`) |
