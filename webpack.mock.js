const games = require('./data/games.json');
const top_games = require('./data/top_games.json');
const users = require('./data/users.json');
const users_order = require('./data/users_orders.json');

function getGameHandler(req, res) {
  const { name, ageLimit, rating, genre, platforms } = req.query;
  let matchGames = games;
  console.log(req.query);
  if (platforms && matchGames.length > 0) {
    matchGames = matchGames.filter((game) => {
      let flag = platforms.some((element) => game.platform[element]);
      return flag;
    });
  }
  if (name && matchGames.length > 0)
    matchGames = matchGames.filter((game) => {
      const regExp = new RegExp('^' + name, 'i');
      return regExp.test(game.name);
    });
  if (ageLimit && matchGames.length > 0) matchGames = matchGames.filter((game) => game.ageLimit <= ageLimit);
  if (genre && matchGames.length > 0) matchGames = matchGames.filter((game) => game.genre == genre);
  if (rating && rating > 1 && matchGames.length > 0) matchGames = matchGames.filter((game) => game.rating >= rating);
  return res.status(200).json(matchGames);
}

function loggin(req, res) {
  const { username, password } = req.body;
  let result = { status: false };
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    if (user.username == username) {
      if (user.password == password) {
        const { avatar, description, name, username } = user;
        result = {
          status: true,
          user: { username, name, description, avatar }
        };
        break;
      } else {
        result = { status: false };
        break;
      }
    }
  }
  return result.status ? res.status(200).json(result.user) : res.status(401).json({ message: 'Wrong login/password' });
}

function getOrders() {}

function createUser() {}

module.exports = proxy = {
  changeHost: true,
  httpProxy: {
    options: {
      ignorePath: true
    }
  },
  listeners: {
    proxyReq: (proxyReq, req, res, options) => {}
  },
  'GET /games': getGameHandler,
  'GET /top-games': top_games,
  'POST /loggin': loggin,
  'GET /get-orders': getOrders,
  'POST /create-user': createUser
};
