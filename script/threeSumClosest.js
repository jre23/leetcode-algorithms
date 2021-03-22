// Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target. Return the sum of the three integers. You may assume that each input would have exactly one solution.

// Example 1:

// Input: nums = [-1,2,1,-4], target = 1
// Output: 2
// Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

// Constraints:

// 3 <= nums.length <= 10^3
// -10^3 <= nums[i] <= 10^3
// -10^4 <= target <= 10^4

// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number}
//  */
var threeSumClosest = function (nums, target) {
  let sum;
  let firstSum;
  let nextSum;
  nums = nums.sort((a, b) => a - b);
  if (nums.length < 3) {
    return 0;
  } else if (nums.length === 3) {
    return nums[0] + nums[1] + nums[2];
  } else {
    sum = nums[0] + nums[1] + nums[nums.length - 1];
    // console.log(sum, "sum before for loop");
    for (let i = 0; i < nums.length - 2; i++) {
      if (i > 0 && nums[i] === nums[i - 1]) {
        continue;
      }
      let j = i + 1;
      let k = nums.length - 1;
      firstSum = nums[i] + nums[j] + nums[k];
      if (firstSum === target) {
        sum = firstSum;
        break;
      } else {
        while (j < k) {
          nextSum = nums[i] + nums[j] + nums[k];
          if (nextSum === target) {
            sum = nextSum;
            break;
          } else {
            // console.log(nextSum, "nextSum while loop");
            // console.log(Math.abs(target - firstSum), "firstSum difference");
            // console.log(Math.abs(target - firstSum), "nextSum difference");
            if (Math.abs(target - firstSum) < Math.abs(target - nextSum)) {
              if (Math.abs(target - firstSum) < Math.abs(target - sum)) {
                sum = firstSum;
              }
            } else if (Math.abs(target - nextSum) < Math.abs(target - sum)) {
              sum = nextSum;
            }
            if (nextSum < target) {
              while (nums[j] === nums[j + 1]) {
                j++;
              }
              j++;
            } else {
              while (nums[k] === nums[k - 1]) {
                k--;
              }
              k--;
            }
          }
        }
      }
    }
  }
  //   console.log(firstSum, "firstSum");
  //   console.log(nextSum, "nextSum");
  return sum;
};

let nums1 = [-1, 2, 1, -4];
let target1 = 2; // expected 2

let nums2 = [0, 0, 0];
let target2 = 1; // expected 0

let nums3 = [1, 1, 1, 1];
let target3 = 0; // expected 3

let nums4 = [0, 2, 1, -3];
let target4 = 1; // expected 0

let nums5 = [-1, 0, 1, 1, 55];
let target5 = 3; // expected 2

console.log(threeSumClosest(nums1, target1), "expected 2"); // expected 2
console.log(threeSumClosest(nums2, target2), "expected 0"); // expected 0
console.log(threeSumClosest(nums3, target3), "expected 3"); // expected 3
console.log(threeSumClosest(nums4, target4), "expected 0"); // expected 0
console.log(threeSumClosest(nums5, target5), "expected 2"); // expected 2
