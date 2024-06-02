/*Write a function to return missing numbers from an unsorted array
 *of numbers that may contain duplicates.
 *For example: missNums([5, 3, 2, 8, 5]) should return [4, 6, 7]
 */

const missNums = function (arr) {
  let sorted = arr.sort((a, b) => a - b);
  let missing = [];

  for (let i = arr[0]; i < arr[arr.length - 1]; i++) {
    if (!arr.find((num) => num === i)) {
      missing.push(i);
    }
  }
  return missing;
};

console.log(missNums([5, 1, 2, 8, 5]));
