/**
 * @param {number[]} nums
 */

const NumArray = function(nums) {
  this.nums = nums;
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */

NumArray.prototype.sumRange = function(left, right) {
  return this.nums.reduce((sum, cur, index) => {
    if ((index >= left) && (index <= right)) {
      return sum + cur;
    }

    return sum;
  }, 0);
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
