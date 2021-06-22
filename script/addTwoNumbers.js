// 2. Add Two Numbers
// Medium

// 12341

// 2858

// Add to List

// Share
// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example 1:

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
// Example 2:

// Input: l1 = [0], l2 = [0]
// Output: [0]
// Example 3:

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]

// Constraints:

// The number of nodes in each linked list is in the range [1, 100].
// 0 <= Node.val <= 9
// It is guaranteed that the list represents a number that does not have leading zeros.

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

// pseudo code
// traverse through each list, put each value of node into an array
// use built in array reverse() to get each number
// add both numbers together
// create new linked list with each number in sum
var addTwoNumbers = function (l1, l2) {
  let curr1 = l1;
  let curr2 = l2;
  let str1 = "";
  let str2 = "";
  let sum = BigInt(0);
  while (curr1) {
    str1 = curr1.val + str1;
    curr1 = curr1.next;
  }
  while (curr2) {
    str2 = curr2.val + str2;
    curr2 = curr2.next;
  }
  let big1 = BigInt(str1);
  let big2 = BigInt(str2);
  sum = big1 + big2;
  sum = sum.toString();
  let newList = new ListNode(sum[sum.length - 1], null);
  let current = newList;
  for (let i = sum.length - 2; i >= 0; i--) {
    current.next = new ListNode(sum[i], null);
    current = current.next;
  }
  return newList;
};
