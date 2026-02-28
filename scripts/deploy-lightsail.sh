#!/bin/bash
set -e
echo "=== Updating system ==="
sudo apt update && sudo apt upgrade -y

echo "=== Installing Node.js 20 ==="
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

echo "=== Installing PM2 and Nginx ==="
sudo npm install -g pm2
sudo apt install nginx -y

echo "=== Cloning repo ==="
cd ~
rm -rf supercoder-landing
git clone https://github.com/samirmusa-imtar/supercoder-landing.git
cd supercoder-landing

echo "=== Installing dependencies and building ==="
npm ci
npm run build

echo "=== Starting app with PM2 ==="
pm2 start ecosystem.config.js
pm2 save

echo "=== Configuring Nginx ==="
sudo tee /etc/nginx/sites-available/default > /dev/null << 'NGINX_EOF'
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
NGINX_EOF

sudo nginx -t && sudo systemctl restart nginx

echo "=== Enabling PM2 on reboot ==="
pm2 startup

echo ""
echo "Done! Open http://YOUR_SERVER_IP in your browser."
echo "Run the command above that pm2 startup printed (sudo env ...) to enable auto-start on reboot."
