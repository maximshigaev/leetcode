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
 * @return {number}
 */

const maxDepth = function(root) {
  if (!root) {
    return 0;
  }

  if (!root.left && !root.right) {
    return 1;
  }

  let result = 1;
  const queue = [{
    value: root,
    level: 1,
  }];

  while (queue.length) {
    const current = queue.shift();
    result = Math.max(result, current.level);

    const { left, right } = current.value;

    if (left) {
      queue.push({
        value: left,
        level: current.level + 1,
      });
    }

    if (right) {
      queue.push({
        value: right,
        level: current.level + 1,
      });
    }
  }
  
  return result;
};

console.log(maxDepth({
  val: 3,
  left: {
    val: 9,
    left: null,
    right: null,
  },
  right: {
    val: 20,
    left: {
      val: 15,
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

console.log(maxDepth({
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left: null,
      right: null,
    },
    right: {
      val: 5,
      left: null,
      right: null,
    },
  },
  right: {
    val: 3,
    left: null,
    right: null,
  },
}));
