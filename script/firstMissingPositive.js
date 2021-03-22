// 41. First Missing Positive
// Hard

// 5395

// 954

// Add to List

// Share
// Given an unsorted integer array nums, find the smallest missing positive integer.

// Example 1:

// Input: nums = [1,2,0]
// Output: 3
// Example 2:

// Input: nums = [3,4,-1,1]
// Output: 2
// Example 3:

// Input: nums = [7,8,9,11,12]
// Output: 1

// Constraints:

// 0 <= nums.length <= 300
// -231 <= nums[i] <= 231 - 1

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
var firstMissingPositive = function (nums) {
  nums = nums.sort((a, b) => a - b);
  let testValue = 1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= 0) {
      continue;
    } else if (nums[i] === testValue) {
      testValue++;
    } else if (nums[i] > testValue) {
      break;
    }
  }
  return testValue;
};

let nums1 = [1, 2, 0]; // expected 3

let nums2 = [3, 4, -1, 1]; // expected 2

let nums3 = [7, 8, 9, 11, 12]; // expected 1

console.log(firstMissingPositive(nums1), "expected 3");
console.log(firstMissingPositive(nums2), "expected 2");
console.log(firstMissingPositive(nums3), "expected 1");

// pseudo code
// sort the array
// set a variable equal to 1
// loop through array, skipping any negative values
// if value is positive and equal to variable (initial value set to 1), increment variable by 1
// if value is greater than variable, break and return variable
//
