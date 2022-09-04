module.exports = (users) => (req, res) => {
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
};
