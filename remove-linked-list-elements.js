/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */

const removeElements = function(head, val) {
  if (!head) {
    return null;
  }

  let next = head;

  while (next.next) {
    if (next.next.val === val) {
      next.next = next.next.next;
    } else {
      next = next.next;
    }
  }

  return head.val === val
    ? head.next
    : head;
};

console.log(removeElements({
  val: 1,
  next: {
    val: 1,
    next: {
      val: 1,
      next: {
        val: 3,
        next: {
          val: 4,
          next: null,
        }
      }
    }
  }
}, 1));
