// 3. Longest Substring Without Repeating Characters
// Medium

// 15187

// 767

// Add to List

// Share
// Given a string s, find the length of the longest substring without repeating characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
// Example 4:

// Input: s = ""
// Output: 0

// Constraints:

// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.

/**
 * @param {string} s
 * @return {number}
 */

// pseudo code
// check base cases
// if s === '' return 0
// else
// iterate through string
// take largest substring of s
// check each letter starting from s[0] if substring contains it
// if so, make substring smaller
var lengthOfLongestSubstring = function (s) {
  if (s === "") return 0;
  if (s.length === 1) return 1;

  let current = "";
  let max = "";
  let letter = "";
  let index = -2;
  // iterate through string
  for (let i = 0; i < s.length; i++) {
    letter = s[i];
    index = current.indexOf(letter); // check if s[i] is in current string

    if (index > -1) {
      // if s[i] in current string, retain max length.
      if (current.length > max.length) {
        max = current;
      }
      // set new current string to string that deletes duplicate letter and adds that letter to the end
      current = current.slice(index + 1) + letter;
    } else {
      current += letter; // else the letter is not in current so add to current
    }
  }
  // once loop is finished, check string lengths again to make sure we return the max
  if (current.length > max.length) {
    max = current;
  }
  return max.length;
};
