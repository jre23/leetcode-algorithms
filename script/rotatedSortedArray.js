// There is an integer array nums sorted in ascending order (with distinct values).

// Prior to being passed to your function, nums is rotated at an unknown pivot index k (0 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

// Given the array nums after the rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

// Example 1:

// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4
// Example 2:

// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1
// Example 3:

// Input: nums = [1], target = 0
// Output: -1

// Constraints:

// 1 <= nums.length <= 5000
// -104 <= nums[i] <= 104
// All values of nums are unique.
// nums is guaranteed to be rotated at some pivot.
// -104 <= target <= 104

// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number}
//  */
var search = function (nums, target) {
  let index;
  let tempIndex;
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] < nums[i - 1]) {
      tempIndex = i;
      break;
    }
  }
  index = binarySearch(nums.slice(0, tempIndex), target);
  if (index === -1) {
    index = binarySearch(nums.slice(tempIndex), target);
    if (index !== -1) {
      index = index + tempIndex;
    }
  }
  // if found return index, else return -1
  console.log(index, "index returned");
  return index;
};

const binarySearch = (array, targetValue) => {
  let minIndex = 0;
  let maxIndex = array.length - 1;
  let targetIndex = -1;
  while (minIndex <= maxIndex) {
    let middleIndex = Math.floor((minIndex + maxIndex) / 2);
    let testValue = array[middleIndex];

    // console.log("====minIndex====");
    // console.log(minIndex);
    // console.log("====maxIndex====");
    // console.log(maxIndex);
    // console.log("====middleIndex====");
    // console.log(middleIndex);
    // console.log("====testValue====");
    // console.log(testValue);
    // console.log("====numOfGuesses====");
    // console.log(numOfGuesses);

    if (testValue === targetValue) {
      console.log("target value found!");
      targetIndex = middleIndex;
      break;
    } else if (testValue < targetValue) {
      console.log("test value is less than target value");
      minIndex = middleIndex + 1;
    } else {
      console.log("test value is greater than target value");
      maxIndex = middleIndex - 1;
    }
  }
  return targetIndex;
};

let nums1 = [4, 5, 6, 7, 0, 1, 2];
let target1 = 0; // expected 4

let nums2 = [4, 5, 6, 7, 0, 1, 2];
let target2 = 3; // expected -1

let nums3 = [1];
let target3 = 0; // expected -1

console.log(search(nums1, target1), "expected 4"); // expected 4
console.log(search(nums2, target2), "expected -1"); // expected -1
console.log(search(nums3, target3), "expected -1"); // expected -1

// pseudo code
// first step is to find pivot point
// for loop through array and compare current value with the last value seen
// if current value is less than the last value seen, pivot point has been found
// check target value against last value seen: if last value seen is greater than target, do binary search on first portion of the array (0 to index - 1) else do binary search on second portion of the array (current index to length - 1 where index is the start of the second sorted portion of the array)
// return index of target, else -1

// splice example
// let myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon']
// let removed = myFish.splice(3, 1)
// myFish is ["angel", "clown", "drum", "sturgeon"]
// removed is ["mandarin"]
