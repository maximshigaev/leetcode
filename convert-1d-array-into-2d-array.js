/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */

const construct2DArray = function(original, m, n) {
  if (m * n !== original.length) {
    return [];
  }

  const result = [];

  for (let i = 0; i < original.length; i++) {
    if (i % n === 0) {
      result.push([original[i]]);
    } else {
      result.at(-1).push(original[i]);
    }
  }

  return result;  
};

console.log(construct2DArray([1,2,3,4], 2, 2));
