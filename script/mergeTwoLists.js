// 21. Merge Two Sorted Lists
// Easy

// 7211

// 799

// Add to List

// Share
// Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.

// Example 1:

// Input: l1 = [1,2,4], l2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:

// Input: l1 = [], l2 = []
// Output: []
// Example 3:

// Input: l1 = [], l2 = [0]
// Output: [0]

// Constraints:

// The number of nodes in both lists is in the range [0, 50].
// -100 <= Node.val <= 100
// Both l1 and l2 are sorted in non-decreasing order.

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
var mergeTwoLists = function (l1, l2) {
  if (l1 === null && l2 === null) return null;
  if (l1 === null && l2 !== null) return l2;
  if (l2 === null && l1 !== null) return l1;
  let curr1 = l1;
  let curr2 = l2;
  let arr = [];
  while (curr1) {
    arr.push(curr1.val);
    curr1 = curr1.next;
  }
  while (curr2) {
    arr.push(curr2.val);
    curr2 = curr2.next;
  }
  arr = arr.sort((a, b) => a - b);
  let newList = new ListNode(arr[0]);
  let temp = newList;
  for (let i = 1; i < arr.length; i++) {
    let newNode = new ListNode(arr[i]);
    temp.next = newNode;
    temp = temp.next;
  }
  return newList;
};
