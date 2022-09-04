module.exports = (users) => (req, res) => {
  const { username, password } = req.body;
  const user = users.find((user) => user.username == username);
  if (user == undefined) {
    const newUser = { username: username, password: password, avatar: '', description: '', name: '' };
    users.push(newUser);
    return res.status(200).json(newUser);
  } else {
    return res.status(400).json({ message: 'This username already exists' });
  }
};
