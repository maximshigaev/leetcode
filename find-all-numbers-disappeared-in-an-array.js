/**
 * @param {number[]} nums
 * @return {number[]}
 */

const findDisappearedNumbers = (nums) => {
  const result = [];
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], true);
  }

  for (let i = 1; i < nums.length + 1; i++) {
    if (!map.has(i)) {
      result.push(i);
    }
  }

  return result;
};

console.log(findDisappearedNumbers([1, 1]));
