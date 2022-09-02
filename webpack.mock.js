const games = require('./data/games.json');
const top_games = require('./data/top_games.json');
const users = require('./data/users.json');
const users_order = require('./data/users_orders.json');

//simulation

function getCurrentDate() {
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  let currentMonth = currentDate.getMonth() + 1 < 10 ? '0' + currentDate.getMonth() + 1 : currentDate.getMonth() + 1;
  let currentDay = currentDate.getDate() < 10 ? '0' + currentDate.getDate() : currentDate.getDate();
  return `${currentDay}-${currentMonth}-${currentYear}`;
}

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

function logginByLocalStorage(req, res) {
  const { username } = req.body;
  let result = { status: false };
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    if (user.username == username) {
      const { avatar, description, name, username } = user;
      result = {
        status: true,
        user: { username, name, description, avatar }
      };
      break;
    }
  }
  return result.status ? res.status(200).json(result.user) : res.status(400).json({ message: 'Not found' });
}

function setOrder(req, res) {
  const { username, order } = req.body;
  let result = { status: false };
  for (let i = 0; i < users_order.length; i++) {
    if (users_order[i].username == username) {
      let newId = users_order[i].orders.length;
      users_order[i].orders.push({ id: newId, date: getCurrentDate(), order });
      result = { status: true };
      break;
    }
  }
  return result.status
    ? res.status(200).json({ message: 'Order added' })
    : res.status(400).json({ message: 'Something went wrong' });
}

function getOrders(req, res) {
  const { username } = req.body;
  let result = { status: false };
  for (let i = 0; i < users_order.length; i++) {
    if (users_order[i].username == username) {
      result = { status: true, orders: users_order[i].orders };
      break;
    }
  }
  return result.status ? res.status(200).json(result.orders) : res.status(400).json({ message: 'Not found' });
}

function createUser(req, res) {
  const { username, password } = req.body;
  const user = users.find((user) => user.username == username);
  if (user == undefined) {
    const newUser = { username: username, password: password, avatar: '', description: '', name: '' };
    users.push(newUser);
    return res.status(200).json(newUser);
  } else {
    return res.status(400).json({ message: 'This username already exists' });
  }
}

function changeUserData(req, res) {
  const { username, avatar, name, description } = req.body;
  let result = { status: false };
  for (let i = 0; i < users.length; i++) {
    if (users[i].username == username) {
      users[i].avatar = avatar;
      users[i].name = name;
      users[i].description = description;
      result = { status: true, user: users[i] };
      break;
    }
  }
  return result.status ? res.status(200).json(result.user) : res.status(400).json({ message: 'Something went wrong' });
}

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
  'POST /change-user-data': changeUserData,
  'POST /get-orders': getOrders,
  'POST /set-order': setOrder,
  'POST /create-user': createUser,
  'POST /get-used-user': logginByLocalStorage
};
