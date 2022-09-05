module.exports = function getCurrentDate() {
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  let currentMonth = currentDate.getMonth() + 1 < 10 ? `0${currentDate.getMonth() + 1}` : currentDate.getMonth() + 1;
  let currentDay = currentDate.getDate() < 10 ? '0' + currentDate.getDate() : currentDate.getDate();
  return `${currentDay}-${currentMonth}-${currentYear}`;
};
