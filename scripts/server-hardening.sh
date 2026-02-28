#!/bin/bash
# Server hardening for Lightsail Ubuntu. Run as root or with sudo.
# Review each section before running; ensure SSH key access works before disabling password auth.

set -e

echo "=== 1. SSH: disable password login, prefer key-only ==="
sed -i.bak 's/^#*PasswordAuthentication.*/PasswordAuthentication no/' /etc/ssh/sshd_config
sed -i.bak 's/^#*PermitRootLogin.*/PermitRootLogin prohibit-password/' /etc/ssh/sshd_config
grep -q '^PasswordAuthentication' /etc/ssh/sshd_config || echo "PasswordAuthentication no" >> /etc/ssh/sshd_config
grep -q '^PermitRootLogin' /etc/ssh/sshd_config || echo "PermitRootLogin prohibit-password" >> /etc/ssh/sshd_config
systemctl restart sshd
echo "SSH restarted. Ensure you have key-based access before disconnecting."

echo "=== 2. UFW firewall ==="
ufw default deny incoming
ufw default allow outgoing
ufw allow 22/tcp
ufw allow 80/tcp
ufw allow 443/tcp
ufw --force enable
ufw status

echo "=== 3. fail2ban ==="
apt-get update
apt-get install -y fail2ban
cat > /etc/fail2ban/jail.local << 'JAIL'
[DEFAULT]
bantime = 3600
findtime = 600
maxretry = 5

[sshd]
enabled = true
JAIL
systemctl enable fail2ban
systemctl restart fail2ban

echo "=== 4. Unattended security updates ==="
apt-get install -y unattended-upgrades
dpkg-reconfigure -plow unattended-upgrades || true

echo "=== 5. Swap (verify; add to fstab if not persistent) ==="
if [ -f /swapfile ] && [ -n "$(swapon --show)" ]; then
  grep -q '/swapfile' /etc/fstab || echo '/swapfile none swap sw 0 0' >> /etc/fstab
  echo "Swap is on and will persist across reboot."
else
  echo "No swapfile found. Create with: sudo fallocate -l 1G /swapfile && sudo chmod 600 /swapfile && sudo mkswap /swapfile && sudo swapon /swapfile"
fi

echo "=== Done. Ports 22, 80, 443 allowed. ==="
