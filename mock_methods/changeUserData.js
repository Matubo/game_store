const users = require('../data/users.json');

module.export = function changeUserData(req, res) {
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
};
