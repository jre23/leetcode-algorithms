// 9. Palindrome Number
// Easy

// 3468

// 1770

// Add to List

// Share
// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.

// Example 1:

// Input: x = 121
// Output: true
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
// Example 4:

// Input: x = -101
// Output: false

// Constraints:

// -231 <= x <= 231 - 1

// Follow up: Could you solve it without converting the integer to a string?

/**
 * @param {number} x
 * @return {boolean}
 */

// pseudo code
// if negative, return false
// if x < 10, return true
// else
// convert x to string
// find loop length
// loop through string checking forwards with backwards
// return false in for loop if forwards doesn't match backwards
// return true otherwise
var isPalindrome = function (x) {
  if (x < 0) return false;
  if (x < 10) return true;
  x = x.toString();
  let loopLength = Math.floor(x.length / 2);
  let j = x.length - 1;
  for (let i = 0; i < loopLength; i++) {
    if (x[i] !== x[j]) return false;
    j--;
  }
  return true;
};
