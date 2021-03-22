// Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.

// Notice that you may not slant the container.

// height is an array
// /**
//  * @param {number[]} height
//  * @return {number}
//  */
var maxArea = function (height) {
  let maximum = 0;
  let i = 0;
  let j = height.length - 1;
  while (j > i) {
    let smallerValue = height[i] < height[j] ? height[i] : height[j];
    let testArea = (j - i) * smallerValue;
    if (testArea > maximum) {
      maximum = testArea;
    }
    smallerValue === height[i] ? i++ : j--;
  }
  return maximum;
};

let height = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]; //expected 25
// let height = [1, 8, 6, 2, 5, 4, 8, 3, 7]; // expected 49
// let height = [2, 3, 4, 5, 18, 17, 6]; // expected 17

console.log(height);
console.log(maxArea(height));

// for/while loop (too slow)
// let maximum = 0;
// for (let i = 0; i < height.length; i++) {
//   let j = height.length - 1;
//   while (j > i) {
//     let smallerValue = height[i] < height[j] ? height[i] : height[j];
//     let testArea = (j - i) * smallerValue;
//     if (testArea > maximum) {
//       maximum = testArea;
//     }
//     j--;
//   }
// }
// return maximum;
