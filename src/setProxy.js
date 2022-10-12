<<<<<<< HEAD
<<<<<<< HEAD
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
=======
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
>>>>>>> 71523f1 (Feat : http-proxy-meddleware 설치 및 setProxy.js 생성)
=======
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
>>>>>>> 5be1bcd (ETC: kakao 로그인 api 연결)
  app.use(
    createProxyMiddleware('/api/v1', {
      target: 'http://localhost:8080',
      changeOrigin: true,
    }),
  );
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
};
>>>>>>> 71523f1 (Feat : http-proxy-meddleware 설치 및 setProxy.js 생성)
=======
}
>>>>>>> 5be1bcd (ETC: kakao 로그인 api 연결)
