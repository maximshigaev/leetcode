/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

const isPalindrome = (head) => {
  let value = head.val;
  const result = [];
  
  while (value !== null) {
    result.push(value);
    head = head.next;
    
    if (!head) {
      break;   
    }

    value = head.val;
  }
          
  if (result.length / 2 === Math.trunc(result.length / 2)) {
    return result.slice(0, result.length / 2).join('') === result.slice(result.length / 2).reverse().join('');
  } else {
    return result.slice(0, Math.ceil(result.length / 2)).join('') === result.slice(Math.floor(result.length / 2)).reverse().join('');
  }
};

const param = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 2,
        next: {
          val: 1,
          next: null,
        }
      }
    }
  }
}

const result = isPalindrome(param.val);

console.log(result, 'result');
