'use strict';

var units = require('./units.json');

/**
 * Rounds number to specified number of significant digits
 * @param {number} num
 * @param {number} digits
 * @return {number}
 */
function round(num, digits) {
  return Number(Math.round(num+'e'+digits)+'e-'+digits);
}

/**
 * Converts value to units in Hot Pockets
 * @param {string} measurement
 * @param {string} unit
 * @param {number} value
 * @param {number} precision
 * @return {number}
 */
function convert(measurement, unit, value, precision = 4) {
  var result = units[measurement][unit] && value / units[measurement][unit].value;
  return round(result, precision);
}


module.exports = convert;
