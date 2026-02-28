module.exports = {
  apps: [
    {
      name: "supercoder-landing",
      script: "node_modules/next/dist/bin/next",
      args: "start",
      cwd: "/home/ubuntu/supercoder-landing",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "500M",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
        NODE_OPTIONS: "--max-old-space-size=384",
      },
      error_file: "/home/ubuntu/.pm2/logs/supercoder-landing-error.log",
      out_file: "/home/ubuntu/.pm2/logs/supercoder-landing-out.log",
      merge_logs: true,
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
    },
  ],
};
