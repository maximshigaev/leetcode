/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

const addBinary = function(a, b) { 
  if (a.length < b.length) {
    a = a.padStart(b.length, '0');
  } else if (b.length < a.length) {
    b = b.padStart(a.length, '0');
  }

  let digit = 0;
  let result = '';

  for (let i = a.length - 1; i >= 0; i--) {
    const sum = +a[i] + +b[i] + digit;

    if (sum < 2) {
      result = sum + result;
      digit = 0;
      continue;
    }

    digit = 1;

    result= (sum === 2)
      ? 0 + result
      : 1 + result;
  }

  return digit
    ? digit + result
    : result;
};

console.log(addBinary("1010", "1011"));
