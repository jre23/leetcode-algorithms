// 14. Longest Common Prefix
// Easy

// 4487

// 2304

// Add to List

// Share
// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lower-case English letters.

/**
 * @param {string[]} strs
 * @return {string}
 */

// pseudo code
// if strs.length === 0 return ''
// else
// while loop?
// iterate through strs checking for longest substr
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return "";
  let i = 0;
  let subStr = strs[0].substring(0, 1);
  while (i < strs[0].length) {
    subStr = strs[0].substring(0, i + 1);
    for (let j = 0; j < strs.length; j++) {
      if (strs[j].substring(0, i + 1) !== subStr) {
        return subStr.substring(0, i);
      }
    }
    i++;
  }
  return subStr;
};
