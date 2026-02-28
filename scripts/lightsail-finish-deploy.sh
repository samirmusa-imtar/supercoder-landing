#!/bin/bash
# Run this ON THE LIGHTSAIL SERVER after connecting via browser SSH.
# If repo is private, clone with: git clone https://YOUR_GITHUB_TOKEN@github.com/samirmusa-imtar/supercoder-landing.git

set -e
cd ~
rm -rf supercoder-landing
git clone https://github.com/samirmusa-imtar/supercoder-landing.git
cd supercoder-landing
npm ci
npm run build
pm2 start ecosystem.config.js
pm2 save
sudo tee /etc/nginx/sites-available/default > /dev/null << 'NGINX'
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
NGINX
sudo nginx -t && sudo systemctl restart nginx
pm2 startup
echo "Done! Open http://63.182.149.106 in your browser."
