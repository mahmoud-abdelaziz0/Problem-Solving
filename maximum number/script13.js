/*Write a function to return the maximum number in an array of numbers.
 *For example: findMaxNum([5, 12, 3, 22, 35]) should return 100
 */

const findMaxNum = function (arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};
console.log(findMaxNum([5, 12, 3, 220, 35]));

// ========================================
// another one
const findMaxNum2 = function (arr) {
  return Math.max(...arr);
  // return Math.max.apply(null, arr);
};

console.log(findMaxNum2([5, 12, 3, 0, 35]));
