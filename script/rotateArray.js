// Given an array, rotate the array to the right by k steps, where k is non-negative.

// test values
let numsArray = [1, 2, 1, 3, 4, 5, 8, 7, 8, 9, 10, 23];
let target = 4;

// submitted solution
// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {void} Do not return anything, modify nums in-place instead.
//  */
var rotate = function (nums, k) {
  // get actual steps if k is larger than nums.length
  if (k % nums.length === 0) {
    console.log("Rotated array is equal to original array.");
  } else if (k > nums.length) {
    k = k % nums.length;
  }
  let frontSlice = nums.slice(0, nums.length - k);
  let backSlice = nums.slice(nums.length - k);
  // splice() changes original array
  nums.splice(0, backSlice.length, ...backSlice);
  nums.splice(backSlice.length, frontSlice.length, ...frontSlice);
};
console.log(numsArray);
rotate(numsArray, target);
console.log("====rotated====");
console.log(numsArray);
