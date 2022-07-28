const games = require('./src/data/games.json');
const top_games = require('./src/data/top_games.json');

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
  if (name && matchGames.length > 0) matchGames = matchGames.filter((game) => game.name == name);
  if (ageLimit && matchGames.length > 0) matchGames = matchGames.filter((game) => game.ageLimit > ageLimit);
  if (genre && matchGames.length > 0) matchGames = matchGames.filter((game) => game.genre == genre);
  if (rating && matchGames.length > 0) matchGames = matchGames.filter((game) => game.rating >= rating);
  return res.json(matchGames);
}

module.exports = proxy = {
  changeHost: true,
  httpProxy: {
    options: {
      ignorePath: true
    }
  },
  listeners: {
    proxyReq: (proxyReq, req, res, options) => {
      console.log(proxyReq);
      console.log(req);
      console.log(res);
      console.log(options);
    }
  },
  'GET /games': getGameHandler,
  'GET /top-games': top_games
};
