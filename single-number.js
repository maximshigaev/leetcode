/**
 * @param {number[]} nums
 * @return {number}
 */

const singleNumber = function(nums) {
  const obj = {};

  for (let i = 0; i < nums.length; i++) {
    if (!(nums[i] in obj)) {
      obj[nums[i]] = 1;
    } else{
      delete obj[nums[i]];
    }
  }

  return Object.keys(obj)[0];
};

console.log(singleNumber([4,1,2,1,2]));
