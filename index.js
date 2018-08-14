var units = require('./units.json');

module.exports = function convert(measurement, unit, value) {
  return units[measurement][unit] && value / units[measurement][unit].value;
};
