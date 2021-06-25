// 19. Remove Nth Node From End of List
// Medium

// 5795

// 327

// Add to List

// Share
// Given the head of a linked list, remove the nth node from the end of the list and return its head.

// Example 1:

// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]
// Example 2:

// Input: head = [1], n = 1
// Output: []
// Example 3:

// Input: head = [1,2], n = 1
// Output: [1]

// Constraints:

// The number of nodes in the list is sz.
// 1 <= sz <= 30
// 0 <= Node.val <= 100
// 1 <= n <= sz

// Follow up: Could you do this in one pass?

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

// pseudo code
// base cases: null => return head
// else
// iterate through list adding to an array
// skip the arr.length - n index when creating new list
var removeNthFromEnd = function (head, n) {
  if (head === null || n === 0) return head;
  if (head.next === null && n === 1) return null;
  let count = 1;
  let current = head;
  while (current) {
    count++;
    current = current.next;
  }
  current = head;
  if (count - n === 1) {
    let temp = current.next;
    current.next = null;
    head = temp;
    return head;
  } else {
    let index = 1;
    while (current.next) {
      index++;
      if (count - n === index) {
        let temp = current.next;
        current.next = current.next.next;
        temp.next = null;
        break;
      }
      current = current.next;
    }
    return head;
  }
};
