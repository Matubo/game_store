const users_orders = require('../data/users_orders.json');
const getCurrentDate = require('./handlers/getCurrentDate');

module.exports = function setOrder(req, res) {
  const { username, order } = req.body;
  let result = { status: false };
  for (let i = 0; i < users_orders.length; i++) {
    if (users_orders[i].username == username) {
      let newId = users_orders[i].orders.length;
      users_orders[i].orders.push({ id: newId, date: getCurrentDate(), order });
      result = { status: true };
      break;
    }
  }
  if (!result.status) {
    users_orders.push({ username, orders: [{ id: 1, date: getCurrentDate(), order }] });
    result = { status: true };
  }
  return result.status
    ? res.status(200).json({ message: 'Order added' })
    : res.status(400).json({ message: 'Something went wrong' });
};
