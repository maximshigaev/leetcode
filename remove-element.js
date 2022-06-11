/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
*/

const removeElement = (nums, val) => {
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[result] = nums[i];
      result++;
    }
  }

  return result;
};

const nums = [1, 2, 3, 3, 4, 9, 8, 7, 3];
const res = removeElement(nums, 3);

console.log(res, 'res');
