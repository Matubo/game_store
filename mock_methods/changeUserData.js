function replace(str) {
  return str.replace(/[\s{2,}]+/g, ' ');
}

module.exports = (users) => (req, res) => {
  let { username, avatar, name, description } = req.body;
  let result = { status: false };
  for (let i = 0; i < users.length; i++) {
    if (users[i].username == replace(username)) {
      users[i].avatar = avatar;
      users[i].name = replace(name);
      users[i].description = replace(description);
      result = { status: true, user: users[i] };
      break;
    }
  }
  return result.status ? res.status(200).json(result.user) : res.status(400).json({ message: 'Something went wrong' });
};
