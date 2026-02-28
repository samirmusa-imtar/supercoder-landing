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
      },
    },
  ],
};
