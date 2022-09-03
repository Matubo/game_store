const games = require('../data/games.json');

module.exports = function getGameHandler(req, res) {
  const { name, ageLimit, rating, genre, platforms } = req.query;
  let matchGames = games;
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
};
