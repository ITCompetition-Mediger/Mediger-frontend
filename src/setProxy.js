// const { createProxyMiddleware } = require("http-proxy-middleware");

// module.exports = function (app) {
//   app.use(
//     createProxyMiddleware("/api/v1", {
//       target: "http://localhost:8080",
//       changeOrigin: true,
//     })
//   );
// };

import { createProxyMiddleware } from 'http-proxy-middleware';

export default function (app) {
  app.use(
    createProxyMiddleware('/api/v1', {
      target: 'http://localhost:8080',
      changeOrigin: true,
    }),
  );
}
