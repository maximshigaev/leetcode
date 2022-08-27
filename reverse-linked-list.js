/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

const reverseList = function(head) {
  if (!head) {
    return null;
  }

  const used = [];
  let result = {}
  
  const traverse = (tree) => {
    used.push(tree.val);

    if (tree.next) {
      traverse(tree.next);
    }
  }

  traverse(head);

  let next = result;
  let current = next;

  while (used.length) {
    current.val = used.pop();
    current.next = used.length
      ? {}
      : null;
    current = current.next;
  }

  return result;
};

console.log(reverseList({
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: null,
    }
  }
}));
