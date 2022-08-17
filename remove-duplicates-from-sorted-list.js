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

const deleteDuplicates = function(head) {
  if (!head?.next) {
    return head;
  }

  let prev = head;
  let next = head.next;

  while (next) {
    if (prev.val === next.val) {
      [prev.next, next] = [next.next, prev.next];
    } else {
      [prev, next] = [next, next.next];
    }
  }

  return head;
};

console.log(deleteDuplicates({
  val: 1,
  next: {
    val: 1,
    next: {
      val: 1,
      next: {
        val: 2,
        next: {
          val: 3,
          next: {
            val: 3,
            next: null,
          }
        }
      }
    }
  }
}));
