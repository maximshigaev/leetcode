/**
 * @param {number[]} nums
 * @return {number}
 */

const missingNumber = function(nums) {
  const map = new Map();
  
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], true);
  }

  for (let i = 0; i < nums.length + 1; i++) {
    if (!map.get(i)) {
      return i;
    }
  }
};


console.log(missingNumber([0, 1]));
