/* eslint-disable @typescript-eslint/no-explicit-any */
// src/entry-server.tsx
import ReactDOMServer from 'react-dom/server';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import { StaticRouter } from 'react-router-dom/server';

export function render(url: string) {
  const helmetContext = {};

  const html = ReactDOMServer.renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </HelmetProvider>
  );

  const { helmet } = helmetContext as any;

  return {
    html,
    helmet: {
      title: helmet?.title?.toString() || '<title>Ayo Sehat</title>',
      meta: helmet?.meta?.toString() || '',
    },
  };
}