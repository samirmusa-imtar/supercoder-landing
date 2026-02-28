#!/bin/bash
# Backup SQLite leads database. Run daily via cron.
# Cron example: 0 2 * * * /home/ubuntu/supercoder-landing/scripts/backup-leads.sh

set -e
APP_DIR="${APP_DIR:-/home/ubuntu/supercoder-landing}"
BACKUP_DIR="${BACKUP_DIR:-/home/ubuntu/backups}"
DB_PATH="${APP_DIR}/prisma/dev.db"

mkdir -p "$BACKUP_DIR"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)
DEST="${BACKUP_DIR}/leads_${TIMESTAMP}.db"

if [ -f "$DB_PATH" ]; then
  cp "$DB_PATH" "$DEST"
  gzip -f "$DEST"
  echo "Backup: ${DEST}.gz"
  # Keep last 30 backups
  ls -t "${BACKUP_DIR}"/leads_*.db.gz 2>/dev/null | tail -n +31 | xargs -r rm --
else
  echo "DB not found: $DB_PATH" >&2
  exit 1
fi
