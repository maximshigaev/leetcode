/**
 * @param {number[]} nums
 * @return {number}
 */

const removeDuplicates = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    const duplicateNumIndex = nums.indexOf(nums[i], i + 1);

    if (duplicateNumIndex !== - 1) {
      nums.splice(i, 1);
      i--;
    }
  }

  return nums.length;
};

const result = removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
const result2 = removeDuplicates([1, 1, 2]);

console.log(result, 'result');
console.log(result2, 'result2');
