/*Write a function that takes an argument of an array of numbers and returns the first duplicate.
 *Example: findFirstDupl([2, 4, 5, 1, 3, 5, 4]) returns 4
 */

function findFirstDupl(arr) {
  console.log(arr);
  let noDup = new Set();

  for (let i = 0; i < arr.length; i++) {
    if (noDup.has(arr[i])) {
      return arr[i];
    }

    noDup.add(arr[i]);
  }
  return -1;
}

console.log(findFirstDupl([2, 4, 5, 2, 1, 3, 5, 4]));

// OUTPUT => 2
