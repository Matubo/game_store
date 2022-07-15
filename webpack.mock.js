const data = require('./src/data/games.json');

module.exports = proxy = {
  changeHost: true,
  httpProxy: {
    options: {
      ignorePath: true
    }
  },
  listeners: {
    proxyReq: (proxyReq, req, res, options) => {
      console.log('proxyReq');
    }
  },
  'GET /games': data
};
