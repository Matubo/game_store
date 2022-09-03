const users_orders = require('../data/users_orders.json');

module.export = function getOrders(req, res) {
  const { username } = req.body;
  let result = { status: false };
  for (let i = 0; i < users_orders.length; i++) {
    if (users_orders[i].username == username) {
      result = { status: true, orders: users_orders[i].orders };
      break;
    }
  }
  return result.status ? res.status(200).json(result.orders) : res.status(400).json({ message: 'Not found' });
};
