setTimeout(() => {
  console.log("Mahmoud");
}, 500);

console.log("Abdelaziz");

setTimeout(() => {
  console.log("Ibrahim");
}, 0);

//! What is the output
/*
OUTPUT:
  Abdelaziz
  Ibrahim
  Mahmoud
*/

// *==========================================================

var acc = () => {
  var x = "m";
  y = "a";
};

acc();
console.log(y); // a ===== but with strictmode it get error

console.log(x); // error

u = 2;
console.log(u); // 2
