const top_games = require('./data/top_games.json');
const getGame = require('./mock_methods/getGame');
const setOrder = require('./mock_methods/setOrder');
const getOrders = require('./mock_methods/getOrders');
const loggin = require('./mock_methods/loggin');
const logginByLocalStorage = require('./mock_methods/logginByLocalStorage');
const changeUserData = require('./mock_methods/changeUserData');
const createUser = require('./mock_methods/createUser');

module.exports = proxy = {
  changeHost: true,
  httpProxy: {
    options: {
      ignorePath: true
    }
  },
  listeners: {},
  'GET /games': getGame,
  'GET /top-games': top_games,
  'POST /loggin': loggin,
  'POST /change-user-data': changeUserData,
  'POST /get-orders': getOrders,
  'POST /set-order': setOrder,
  'POST /create-user': createUser,
  'POST /get-used-user': logginByLocalStorage
};
