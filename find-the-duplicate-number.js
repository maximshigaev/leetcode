/**
 * @param {number[]} nums
 * @return {number}
 */

const findDuplicate = function(nums) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (!map.has(nums[i])) {
      map.set(nums[i], true);
    } else {
      return nums[i];
    }
  }
};

console.log(findDuplicate([1,3,4,2,2]));
