const games = require('./src/data/games.json');
const top_games = require('./src/data/top_games.json');

const platforms = ['xbox', 'pc', 'playstation'];

function getGameHandler(req, res) {
  const { name, ageLimit, rating, genre, platform } = req.query;
  let matchGames = games;
  if (name && matchGames.length > 0) matchGames = matchGames.filter((game) => game.name == name);
  if (ageLimit && matchGames.length > 0) matchGames = matchGames.filter((game) => game.ageLimit > ageLimit);
  if (genre && matchGames.length > 0) matchGames = matchGames.filter((game) => game.genre > genre);
  if (rating && matchGames.length > 0) matchGames = matchGames.filter((game) => game.rating >= rating);
  if (platform && matchGames.length > 0) {
    matchGames = matchGames.filter((game) => {
      platforms.forEach((item) => {
        if (game.platform[item]) {
          console.log(true);
          return true;
        }
      });
      return false;
    });
  }

  return res.json(matchGames);
}

/* "name": "Grand Theft Auto V",
"ageLimit": 18,
"rating": 5,
"price": 10.99,
"genre": "Action-adventure",
"platform" */

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
  /* 'GET /games': getGameQueryHandler, */
  'GET /games': getGameHandler,
  'GET /top-games': top_games
};
