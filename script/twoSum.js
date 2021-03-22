// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// test values
let numsArray = [1, 2, 1, 3, 4, 5, 8, 7, 8, 9, 10, 23];
let target = 16;

// submitted solution
// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j <= nums.length; j++) {
      if (i < nums.length) {
        if (nums[i] + nums[j] === target) {
          return [i, j];
        }
      }
    }
  }
};

console.log(twoSum(numsArray, target));
