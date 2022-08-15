/**
 * @param {number[]} nums
 * @return {number}
 */

const majorityElement = function(nums) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const count = map.has(nums[i])
      ? map.get(nums[i])
      : 0;

    if (count + 1 > nums.length / 2) {
      return nums[i];
    }

    map.set(nums[i], count + 1);
  }
};

console.log(majorityElement([2,2,1,1,1,2,2]));
