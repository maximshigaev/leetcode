/**
 * @param {number} n
 * @return {number[]}
 */

const countBits = function(n) {
  let result = [];

  for (let i = 0; i <= n; i++) {
    const current = i
      .toString(2)
      .split('0')
      .join('')
      .length;
    result.push(current);
  }

  return result;
};

console.log(countBits(2));
