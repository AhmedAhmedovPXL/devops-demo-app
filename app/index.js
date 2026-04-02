const express = require('express');
const app = express();
const PORT = 3000;

const startTime = new Date();

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>DevOps Demo App</title>
        <style>
          body { font-family: Arial; background: #1a1a2e; color: white; text-align: center; padding: 50px; }
          .card { background: #16213e; padding: 30px; border-radius: 10px; display: inline-block; }
          .green { color: #00ff88; }
          .blue { color: #00aaff; }
        </style>
      </head>
      <body>
        <div class="card">
          <h1>🚀 DevOps Demo App</h1>
          <p class="green">✅ Running on Kubernetes (AKS)</p>
          <p class="blue">Deployed via ArgoCD + GitHub Actions</p>
          <p>Version: <strong>${process.env.APP_VERSION || '1.0.0'}</strong></p>
          <p>Uptime: <strong>${Math.floor((new Date() - startTime) / 1000)}s</strong></p>
        </div>
      </body>
    </html>
  `);
});

app.get('/health', (req, res) => {
  res.json({ status: 'healthy', version: process.env.APP_VERSION || '1.0.0' });
});

app.listen(PORT, () => console.log(`App running on port ${PORT}`));
