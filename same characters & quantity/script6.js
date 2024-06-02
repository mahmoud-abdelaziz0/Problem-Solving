/*Write a function that takes 2 string arguments and check if
 *the 2 strings are anagrams to each other (have the same characters with the same quantity).
 *Consider only characters not spaces, or
 * punctuations.*/

//Example: anagram('Ab bc', 'cbab'); // return true
//Example: anagram('abbc', 'cba'); // return false
//Example: anagram('abbc?!', 'cbab'); // return true

const anagram = (string1, string2) => cleanText(string1) === cleanText(string2);

const cleanText = (str) =>
  str
    .replace(/[^\w]|_/g, "")
    .toLowerCase()
    .split("")
    .sort()
    .join("");

console.log(anagram("Ab bc", "cbab"));
console.log(anagram("abbc", "cba"));
console.log(anagram("abbc?!", "cbab"));

//!################################################################################
