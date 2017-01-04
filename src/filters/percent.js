
/**
 * Vue filter to convert the given value to percent.
 * http://jsfiddle.net/bryan_k/qauf3qyh/
 *
 * @param {String} value    The value string.
 * @param {Number} decimals The number of decimal places.
 */
export default function(value, decimals, symbol) {
  if(!value) {
    value = 0;
  }

  if(!decimals) {
    decimals = 0;
  }

   if(symbol !== false) {
    symbol = true;
  }

  value = value * 100;
  value = Math.round(value * Math.pow(10, decimals)) / Math.pow(10, decimals);
  if( symbol ) {
    value = value + '%';
  }
  return value;
}
