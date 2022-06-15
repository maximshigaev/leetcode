/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

const searchInsert = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;
  let mid = Math.ceil((left + right) / 2);

  while (left < right) {
    if (target < nums[mid]) {
      right = mid - 1;
    } else {
      left = mid;
    }

    mid = Math.ceil((left + right) / 2);
  }

  if (nums[left] === target) {
    return left;
  }

  return nums[left] > target
    ? Math.max(left - 1, 0)
    : left + 1;
}

const arr1 = [1, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 15];

const res1 = searchInsert(arr1, 0);

console.log(res1, 'res1');
