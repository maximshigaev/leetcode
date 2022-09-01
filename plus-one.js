/**
 * @param {number[]} digits
 * @return {number[]}
 */

const plusOne = function(digits) {
  const result = [...digits];

  if (result.at(-1) < 9) {
    result[result.length - 1] = result.at(-1) + 1;
    
    return result;
  }

  let cur = result.length - 1;

  while (result[cur] === 9) {
    result[cur] = 0;
    cur--;
  }

  if (cur !== -1) {
    result[cur]++;
  } else {
    result.unshift(1);
  }

  return result;
};

console.log(plusOne([1, 9,9,9,9,9]));
