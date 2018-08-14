var units = require('./units.json');

function round(value, decimals) {
  return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}

module.exports = function convert(measurement, unit, value, precision = 4) {
  var result = units[measurement][unit] && value / units[measurement][unit].value;
  return round(result, precision);
};
