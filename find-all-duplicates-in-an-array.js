/**
 * @param {number[]} nums
 * @return {number[]}
 */

const findDuplicates = function(nums) {
  const map = new Map();
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    const count = map.get(nums[i]) ?? 0;

    if (count === 1) {
      result.push(nums[i])
    }

    map.set(nums[i], count + 1);
  }

  return result;
};

console.log(findDuplicates([4,3,2,7,8,2,3,1]));
