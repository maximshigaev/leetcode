/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

const mergeTwoLists = (list1, list2) => {
  if (!list1 && !list2) return null;
  if (!list1) return list2;
  if (!list2) return list1;

  const arr1 = [];
  const arr2 = [];

  let curr1 = list1;
  let curr2 = list2;

  while (true) {
    arr1.push(curr1.val)

    if (!curr1.next) break;

    curr1 = curr1.next;
  }

  while (true) {
    arr2.push(curr2.val)

    if (!curr2.next) break;

    curr2 = curr2.next;
  }

  const sortedUnifiedArray = [
    ...arr1,
    ...arr2
  ].sort((a, b) => a - b);

  const result = sortedUnifiedArray.reduceRight((acc, cur, index, self) => {
    if (index === (self.length - 1)) {
      acc.next = null;
      acc.val = cur;
    } else {
      acc.next = {...acc};
      acc.val = cur;
    }

    return acc;
  }, {});

  return result;
};

const res = mergeTwoLists(list1, list2);

console.log(res, 'res');
