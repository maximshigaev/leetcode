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

const middleNode = (head) => {
  let valueFast = head.val;
  let slowHead = {...head};
  let counter = 0;

  while (valueFast !== null) {
    counter++;

    if (counter % 2 === 0) {
      slowHead = slowHead.next;
    }

    head = head.next;
    
    if (!head) {
      break;   
    }

    valueFast = head.val;
  }

  return slowHead;
};

const param1 = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: null,
        },
      },
    },
  },
}

const param2 = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: {
            val: 6,
            next: null,
          },
        },
      },
    },
  },
}

const result1 = middleNode(param1);
const result2 = middleNode(param2);

console.log(result1, 'result1');
console.log(result2, 'result2');
