/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

const averageOfLevels = function(root) {
  const used = [];
  const queue = [{
    el: root,
    level: 1,
  }];

  while (queue.length) {
    const current = queue.shift();

    if (used[current.level - 1]) {
      used[current.level - 1].count++;
      used[current.level - 1].val += current.el.val;
    } else {
      used.push({
        count: 1,
        val: current.el.val,
      });
    }

    if (current.el.left) {
      queue.push({
        el: current.el.left,
        level: current.level + 1,
      });
    }

    if (current.el.right) {
      queue.push({
        el: current.el.right,
        level: current.level + 1,
      });
    }
  }

  const result = used.map(({ count, val }) => val / count);

  return result;
};

console.log(averageOfLevels({
  val: 1,
  left: {
    val: 2,
    left: {
      val: 3,
      left: null,
      right: null,
    },
    right: {
      val: 4,
      left: null,
      right: null,
    },
  },
  right: {
    val: 5,
    left: {
      val: 6,
      left: null,
      right: null,
    },
    right: {
      val: 7,
      left: null,
      right: null,
    },
  },
}));
