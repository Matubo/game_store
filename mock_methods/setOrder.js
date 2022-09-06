const getCurrentDate = require('./handlers/getCurrentDate');

module.exports = (users_orders) => (req, res) => {
  const { username, order } = req.body;
  let result = { status: false },
    total = 0,
    amount = 0;
  for (let i = 0; i < order.length; i++) {
    amount = amount + order[i].amount;
    total = total + order[i].amount * order[i].price;
  }
  for (let i = 0; i < users_orders.length; i++) {
    if (users_orders[i].username == username) {
      let newId = users_orders[i].orders.length + 1;
      users_orders[i].orders.unshift({ id: newId, date: getCurrentDate(), total: total.toFixed(2), order, amount });
      result = { status: true };
      break;
    }
  }
  if (!result.status) {
    users_orders.push({
      username,
      orders: [{ id: 1, date: getCurrentDate(), total: total.toFixed(2), order, amount }]
    });
    result = { status: true };
  }
  return result.status
    ? res.status(200).json({ message: 'Order added' })
    : res.status(400).json({ message: 'Something went wrong' });
};
