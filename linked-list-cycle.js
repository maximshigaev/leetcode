/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

const hasCycle = function(head) {
  let next = head;
  const used = [next];

  while (next) {
    if (used.includes(next.next)) {
      return true;
    }

    used.push(next.next);
    next = next.next;
  }

  return false;
};

const list = {
  val: 3,
  next: {
    val: 2,
    next: {
      val: 0,
      next: {
        val: 4,
        next: null,
      }
    }
  }
}

console.log(hasCycle(list));
