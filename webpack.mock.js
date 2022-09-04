const top_games = require('./data/top_games.json');
const users = require('./data/users.json');
const games = require('./data/games.json');
const orders = require('./data/users_orders.json');
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
  'GET /games': getGame(games),
  'GET /top-games': top_games,
  'POST /loggin': loggin(users),
  'POST /change-user-data': changeUserData(users),
  'POST /get-orders': getOrders(orders),
  'POST /set-order': setOrder(orders),
  'POST /create-user': createUser(users),
  'POST /get-used-user': logginByLocalStorage(users)
};
