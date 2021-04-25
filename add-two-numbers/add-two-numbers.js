/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (l1, l2) => {
  let res = new ListNode();
  let cur = res;
  let carry = 0;
  while (l1 || l2 || carry) {
    if (l1) {
      carry += l1.val; // Calculate sum
      l1 = l1.next;
    }
    if (l2) {
      carry += l2.val; // Calculate sum
      l2 = l2.next;
    }
    const lastDigit = carry % 10; // Get the last digit
    carry = Math.floor(carry / 10); // Update the carry
    cur.next = new ListNode(lastDigit);
    cur = cur.next;
  }

  return res.next;
};