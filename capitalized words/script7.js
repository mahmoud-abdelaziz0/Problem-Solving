//! Write a function that takes a string argument and return the same string with capitalized words.
//Examples:
//capitalizeWords('a program'); return 'A Program'
//capitalizeWords('city of angels'); return 'City Of Angels'

const capitalizeWords = (str) => {
  let spl = str.split(" ");
  let arr = [];
  for (let spStr of spl) {
    let cap = spStr.charAt(0).toUpperCase() + spStr.slice(1);
    arr.push(cap);
  }
  return arr.join(" ");
};

console.log(capitalizeWords("a program"));

// =================================================
// //! Another sol
function capitalizeWords(str) {
  strArr = str.split(" ");
  let capitalizedStr = strArr
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
  console.log(capitalizedStr);
  return capitalizedStr;
}
capitalizeWords("a program");
