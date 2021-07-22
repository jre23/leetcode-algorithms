// 28. Implement strStr()
// Easy

// 2676

// 2572

// Add to List

// Share
// Implement strStr().

// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Clarification:

// What should we return when needle is an empty string? This is a great question to ask during an interview.

// For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

// Example 1:

// Input: haystack = "hello", needle = "ll"
// Output: 2
// Example 2:

// Input: haystack = "aaaaa", needle = "bba"
// Output: -1
// Example 3:

// Input: haystack = "", needle = ""
// Output: 0

// Constraints:

// 0 <= haystack.length, needle.length <= 5 * 104
// haystack and needle consist of only lower-case English characters.

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (needle === "") return 0;
  if (needle.length > haystack.length) return -1;
  for (let i = 0; i < haystack.length; i++) {
    if (needle[0] === haystack[i]) {
      if (haystack.length - i < needle.length) return -1;
      let index = i;
      let j = i;
      let k = 0;
      while (k < needle.length) {
        if (haystack[j] !== needle[k]) break;
        k++;
        j++;
      }
      if (k === needle.length) return index;
    }
  }
  return -1;

  // return haystack.indexOf(needle);
};
