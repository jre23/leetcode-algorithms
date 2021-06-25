// 20. Valid Parentheses
// Easy

// 7895

// 325

// Add to List

// Share
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false
// Example 4:

// Input: s = "([)]"
// Output: false
// Example 5:

// Input: s = "{[]}"
// Output: true

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

/**
 * @param {string} s
 * @return {boolean}
 */

// pseudo code
// if s === '' || ')' || '}' || ']' return false
// else
// iterate through s pushing opening brackets into an array
// if closing bracket, pop last item out of array and check if it matches
// if no match return false
// if loop finishes, return true
var isValid = function (s) {
  if (
    s === "" ||
    s === ")" ||
    s === "]" ||
    s === "}" ||
    s.length < 2 ||
    s.length % 2 !== 0 ||
    s[s.length - 1] === "{" ||
    s[s.length - 1] === "(" ||
    s[s.length - 1] === "["
  )
    return false;
  let arr = [];
  let temp = "";
  let pop = "";
  for (let i = 0; i < s.length; i++) {
    // console.log(s[i], 's[i]')
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      arr.push(s[i]);
    } else {
      pop = arr.pop();
      temp = s[i] === ")" ? "(" : s[i] === "]" ? "[" : "{";
      if (temp !== pop) return false;
    }
  }
  return arr.length === 0;
};
