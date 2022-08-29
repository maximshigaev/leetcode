/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

const isSameTree = function(p, q) {
  if (!p && !q) {
    return true;
  }

  if (!p || !q) {
    return false;
  }

  let result = true;

  const traverse = (tree1, tree2) => {
    if (tree1.val !== tree2.val || !!tree1.left !== !!tree2.left || !!tree1.right !== !!tree2.right) {
      result = false;
      return;
    }
    
    if (tree1.left && tree2.left) {
      traverse(tree1.left, tree2.left);
    }

    if (tree1.right && tree2.right) {
      traverse(tree1.right, tree2.right);
    }
  }

  traverse(p, q);

  return result;
};

console.log(isSameTree({
  val: 1,
  left: {
    val: 2,
    left: null,
    right: null,
  },
  right: {
    val: 3,
    left: null,
    right: null,
  },
}, {
  val: 1,
  left: {
    val: 2,
    left: null,
    right: null,
  },
  right: {
    val: 3,
    left: null,
    right: null,
  },
}));
