//!################################################################################
/*Write a function that takes an argument of string and returns true, or false according to the string being palindrome or not.
 *Take into consideration that spaces count, while punctuation doesn't.
 *For example: palindrome("Dad") return true
 * palindrome("code") return false
 */

function isPalindrome(str) {
  let arrStr = [...str];
  let rev = [];
  for (let i = 0; i < arrStr.length; i++) {
    rev.unshift(arrStr[i]);
  }
  return arrStr.join("").toLowerCase() === rev.join("").toLowerCase();
}

console.log(isPalindrome("Dad"));

// ==============================================================
//* Another Sol
function isPalindrome(str) {
  let reverseStr = [...str].reduce(function (acc, cur) {
    return cur + acc;
  });
  return str.toLowerCase() === reverseStr.toLowerCase();
}
console.log(isPalindrome("code"));

// ==============================================================
//* Another Sol
function isPalindrome(str) {
  // console.log([...str]);
  str = str.toLowerCase();
  return str === [...str].reverse().join("");
}

console.log(isPalindrome("code"));

//!################################################################################
