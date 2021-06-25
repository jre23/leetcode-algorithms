// 7. Reverse Integer
// Easy

// 4980

// 7547

// Add to List

// Share
// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21
// Example 4:

// Input: x = 0
// Output: 0

// Constraints:

// -231 <= x <= 231 - 1

/**
 * @param {number} x
 * @return {number}
 */

// pseudo code
// if (x > -10 && x < 0) return -x
// if (x >== 0 && x < 10) return x
// else
// split number into array to use arr.reverse()
// if negative, add '-'
// if arr.reverse[0] === 0, drop the 0
// return reversed x
var reverse = function (x) {
  if (x > -10 && x < 10) return x;
  // if (x >== 0 && x < 10) return x
  x = x.toString();
  let arr = x.split("");
  // console.log(arr, 'arr')
  let negative = false;
  if (arr[0] === "-") {
    negative = true;
    arr = arr.splice(1);
  }
  // console.log(arr, 'arr.splice(1)')
  arr = arr.reverse();
  // console.log(arr, 'arr.reverse()')
  reverseNum = arr.join("");
  reverseNum = parseInt(reverseNum);
  // console.log(typeof reverseNum, "reverseNum")
  if (negative) {
    if (-Math.abs(reverseNum) < -(2 ** 31)) return 0;
    return -Math.abs(reverseNum);
  }
  if (reverseNum > 2 ** 31) return 0;
  return reverseNum;
};
