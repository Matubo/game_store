const users = require('../data/users.json');

module.exports = function loggin(req, res) {
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
};
