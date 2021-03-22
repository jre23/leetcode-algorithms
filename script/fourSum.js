// Given an array nums of n integers and an integer target, are there elements a, b, c, and d in nums such that a + b + c + d = target? Find all unique quadruplets in the array which gives the sum of target.

// Notice that the solution set must not contain duplicate quadruplets.

// Example 1:

// Input: nums = [1,0,-1,0,-2,2], target = 0
// Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
// Example 2:

// Input: nums = [], target = 0
// Output: []

// Constraints:

// 0 <= nums.length <= 200
// -109 <= nums[i] <= 109
// -109 <= target <= 109

// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[][]}
//  */
var fourSum = function (nums, target) {
  let results = [];
  nums = nums.sort((a, b) => a - b);
  if (nums.length < 4) {
    return results;
  } else if (nums.length === 4) {
    nums[0] + nums[1] + nums[2] + nums[3] === target
      ? results.push([nums[0], nums[1], nums[2], nums[3]])
      : (results = []);
    return results;
  } else {
    for (let i = 0; i < nums.length - 3; i++) {
      if (i > 0 && nums[i] === nums[i - 1]) {
        continue;
      }
      for (let j = i + 1; j < nums.length - 2; j++) {
        // let j = i + 1;
        let k = j + 1;
        let l = nums.length - 1;

        while (k < l) {
          if (
            nums[i] + nums[j] + nums[k] + nums[l] === target &&
            !results.some(
              (item) =>
                JSON.stringify(item) ===
                JSON.stringify([nums[i], nums[j], nums[k], nums[l]])
            )
          ) {
            results.push([nums[i], nums[j], nums[k], nums[l]]);
            while (nums[k] === nums[k + 1]) {
              k++;
            }
            while (nums[l] === nums[l - 1]) {
              l--;
            }
            k++;
            l--;
          } else if (nums[i] + nums[j] + nums[k] + nums[l] < target) {
            k++;
          } else {
            l--;
          }
        }
      }
    }
  }
  return results;
};

let nums1 = [1, 0, -1, 0, -2, 2]; // [-2, -1, 0, 0, 1, 2] [-2, 0, 0, 2]
let target1 = 0; // expected [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]

let nums2 = [];
let target2 = 0; // expected []

let nums3 = [1, 1, 1, 1];
let target3 = 4; // expected [[1,1,1,1,]]

let nums4 = [-2, -1, -1, 1, 1, 2, 2];
let target4 = 0; // expected [[-2,-1,1,2],[-1,-1,1,1]]

// let nums5 = [-1, 0, 1, 1, 55];
// let target5 = 3; // expected 2

console.log(
  fourSum(nums1, target1),
  "expected [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]"
); // expected 2
// console.log(fourSum(nums2, target2), "expected []"); // expected []

// console.log(fourSum(nums3, target3), ""); // expected 3
console.log(fourSum(nums4, target4), "expected [[-2,-1,1,2],[-1,-1,1,1]]"); // expected [[-2,-1,1,2],[-1,-1,1,1]]
// console.log(fourSum(nums5, target5), "expected 2"); // expected 2
