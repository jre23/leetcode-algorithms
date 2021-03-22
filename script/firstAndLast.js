// Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// Follow up: Could you write an algorithm with O(log n) runtime complexity?

// Example 1:

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
// Example 2:

// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]
// Example 3:

// Input: nums = [], target = 0
// Output: [-1,-1]

// Constraints:

// 0 <= nums.length <= 105
// -109 <= nums[i] <= 109
// nums is a non-decreasing array.
// -109 <= target <= 109

// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
var searchRange = function (nums, target) {
  let firstIndex = -1;
  let lastIndex = -1;
  if (nums.length === 0) {
    return [firstIndex, lastIndex];
  }
  // loop through array to find target. if found set first and last index to i
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      firstIndex = i;
      lastIndex = i;
      break;
    }
  }
  // if there are duplicates, skip them starting at the index found and increment lastIndex
  while (nums[lastIndex] === nums[lastIndex + 1]) {
    lastIndex++;
  }
  return [firstIndex, lastIndex];
};

let nums1 = [5, 7, 7, 8, 8, 10];
let target1 = 8; // expected [3,4]

let nums2 = [5, 7, 7, 8, 8, 10];
let target2 = 6; // expected [-1, -1]

let nums3 = [];
let target3 = 0; // expected [-1, -1]

console.log(searchRange(nums1, target1), "expected [3, 4]"); // expected 2
console.log(searchRange(nums2, target2), "expected [-1, -1]"); // expected 0
console.log(searchRange(nums3, target3), "expected [-1, -1]"); // expected 3

// pseudo code
// for loop through array to find target
// if target is found, while loop to skip duplicates
// return [-1, -1] if target not found
