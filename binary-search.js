/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

const search = function(nums, target) {
  let pivot = Math.ceil(nums.length / 2) - 1;
  let leftPointer = 0;
  let rightPointer = nums.length - 1;

  while ((rightPointer - leftPointer) > 1) {
    if ((target >= nums[leftPointer]) && (target <= nums[pivot])) {
      rightPointer = pivot;
    } else {
      leftPointer = pivot;
    }

    pivot = Math.floor((leftPointer + rightPointer) / 2);
  }
  
  if ((nums[leftPointer] !== target) && (nums[rightPointer] !== target)) {
    return -1;
  }

  return (nums[leftPointer] === target)
    ? leftPointer
    : rightPointer;
};

console.log(search([-1,0,3,5,9,12], 9));
