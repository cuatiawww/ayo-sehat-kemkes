// server.js
import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const isProd = process.env.NODE_ENV === 'production';
const app = express();
const port = 3000;

async function createServer() {
  let vite;
  let render;

  if (!isProd) {
    // === DEVELOPMENT ===
    const { createServer: createViteServer } = await import('vite');
    vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'custom',
    });

    // Vite middleware
    app.use(vite.middlewares);

    // GUNAKAN app.all('*') BUKAN app.use('*')
    app.all('*', async (req, res) => {
      try {
        const url = req.originalUrl;

        let template = fs.readFileSync(resolve(__dirname, 'index.html'), 'utf-8');
        template = await vite.transformIndexHtml(url, template);

        const entry = await vite.ssrLoadModule('/src/entry-server.tsx');
        render = entry.render;

        const { html, helmet } = render(url);

        const finalHtml = template
          .replace('{{{html}}}', html)
          .replace('{{{helmet.title}}}', helmet.title)
          .replace('{{{helmet.meta}}}', helmet.meta);

        res.status(200).set({ 'Content-Type': 'text/html' }).end(finalHtml);
      } catch (e) {
        vite.ssrFixStacktrace?.(e);
        console.error(e);
        res.status(500).end(e.message);
      }
    });
  } else {
    // === PRODUCTION ===
    const distPath = resolve(__dirname, 'dist/client');
    app.use('/assets', express.static(resolve(distPath, 'assets')));

    const template = fs.readFileSync(resolve(distPath, 'index.html'), 'utf-8');
    const { render } = await import('./dist/server/entry-server.js');

    app.all('*', (req, res) => {
      const url = req.originalUrl;
      const { html, helmet } = render(url);

      const finalHtml = template
        .replace('{{{html}}}', html)
        .replace('{{{helmet.title}}}', helmet.title)
        .replace('{{{helmet.meta}}}', helmet.meta);

      res.status(200).set({ 'Content-Type': 'text/html' }).end(finalHtml);
    });
  }

  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}

createServer();