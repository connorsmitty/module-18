const moment = require('moment');

exports.formatDate = (date) => {
  return moment(date).format('MMMM Do YYYY, h:mm:ss a');
};

exports.dateDifference = (date1, date2) => {
  return moment(date2).diff(moment(date1), 'days');
};

exports.isValidDate = (date) => {
  return moment(date, 'MMMM Do YYYY, h:mm:ss a', true).isValid();
};