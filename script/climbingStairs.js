// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

// Input: n = 4
// Output: 5
// Explanation: There are five ways to climb to the top.
// 1. 1 step + 1 step + 1 step + 1 step
// 2. 1 step + + 1 step + 2 steps
// 3. 1 step + 2 steps + 1 step
// 4. 2 steps + 1 step + 1 step
// 5. 2 steps + 2 steps

// Input: n = 5
// Output: 8
// Explanation: There are eight ways to climb to the top.
// 1. 1 step + 1 step + 1 step + 1 step + 1 step
// 2. 1 step + 1 step + 1 step + 2 steps
// 3. 1 step + 1 step + 2 steps + 1 step
// 4. 1 step + 2 steps + 1 step + 1 step
// 5. 1 step + 2 steps + 2 steps
// 6. 2 steps + 2 steps + 1 step
// 7. 2 steps + 1 step + 2 steps
// 8. 2 steps + 1 step + 1 step + 1 step

// Input: n = 6
// Output: 13
// Explanation: There are thirteen ways to climb to the top.
// 1. 1 step + 1 step + 1 step + 1 step + 1 step + 1 step
// 2. 1 step + 1 step + 1 step + 1 step + 2 steps
// 3. 1 step + 1 step + 1 step + 2 steps + 1 step
// 4. 1 step + 1 step + 2 steps + 1 step + 1 step
// 5. 1 step + 2 steps + 1 step + 1 step + 1 step
// 6. 2 steps + 1 step + 1 step + 1 step + 1 step
// 7. 2 steps + 2 steps + 1 step + 1 step
// 8. 2 steps + 2 steps + 2 steps
// 9. 1 step + 2 steps + 1 step + 2 steps
// 10. 2 steps + 2 steps + 1 step + 1 step
// 11. 2 steps + 1 step + 2 steps + 1 step
// 12. 2 steps + 1 step + 1 step + 2 steps
// 13. 1 step + 1 step + 2 steps + 2 steps

// hint: To reach nth step, what could have been your previous steps? (Think about the step sizes)

// constraints 1 <= n <= 45

// /**
//  * @param {number} n
//  * @return {number}
//  */
// var climbStairs = function (n) {
//   if (n === 1) {
//     return 1;
//   } else if (n === 2) {
//     return 2;
//   } else {
//     return climbStairs(n - 1) + climbStairs(n - 2);
//   }
// };

// using switch case
// var climbStairs = function (n) {
//   let distinctWays = 0;
//   switch (n) {
//     case 1:
//       distinctWays += 1;
//       break;
//     case 2:
//       distinctWays += 2;
//       break;
//     default:
//       return climbStairs(n - 1) + climbStairs(n - 2);
//   }
//   return distinctWays;
// };

// after learning how to speed up recursive calls with memoization. references: https://codeburst.io/understanding-memoization-in-3-minutes-2e58daf33a19
// https://scotch.io/tutorials/understanding-memoization-in-javascript
var cache = {};
var climbStairs = function (n) {
  if (cache[n]) {
    return cache[n];
  } else {
    if (n === 1) {
      console.log("====1====");
      return 1;
    } else if (n === 2) {
      console.log("====2====");
      return 2;
    } else {
      cache[n] = climbStairs(n - 1) + climbStairs(n - 2);
      console.log("====cache[n]====");
      console.log(cache[n]);
      return cache[n];
    }
  }
};

// console.log(climbStairs(1));
// console.log(climbStairs(2));
// console.log(climbStairs(3));
// console.log(climbStairs(4));
// console.log(climbStairs(5));
// console.log(climbStairs(6));
// console.log(climbStairs(7));
// console.log(climbStairs(8));
// console.log(climbStairs(23));
