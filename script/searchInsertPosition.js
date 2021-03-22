// 35. Search Insert Position
// Easy

// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4
// Example 4:

// Input: nums = [1,3,5,6], target = 0
// Output: 0
// Example 5:

// Input: nums = [1], target = 0
// Output: 0

// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number}
//  */
var searchInsert = function (nums, target) {
  let index;
  for (let i = 0; i < nums.length; i++) {
    if (i < 1 && nums[i] > target && nums[i] !== target) {
      return 0;
    } else if (nums[i] === target) {
      index = i;
      break;
    } else if (nums[i] > target && nums[i - 1] < target) {
      index = i;
      break;
    } else if (i === nums.length - 1) {
      index = i + 1;
    }
  }
  return index;
};

let nums1 = [1, 3, 5, 6];
let target1 = 5; // expected 2

let nums2 = [1, 3, 5, 6];
let target2 = 2; // expected 1

let nums3 = [1, 3, 5, 6];
let target3 = 7; // expected 4

let nums4 = [1, 3, 5, 6];
let target4 = 0; // expected 0

let nums5 = [1];
let target5 = 0; // expected 0

console.log(searchInsert(nums1, target1), "expected 2");
console.log(searchInsert(nums2, target2), "expected 1");
console.log(searchInsert(nums3, target3), "expected 4");
console.log(searchInsert(nums4, target4), "expected 0");
console.log(searchInsert(nums5, target5), "expected 0");

// pseudo code
// arrays is sorted, has distinct integers
// for loop through array to find target
// if found, return index
// if value at index is greater than target and value at previous index is less than target, return that index
// return index of target if found, else return index of where it would be in the array
