x = "Ahmed"; // will run

const func = () => {
  let y = "Ola";
  console.log(x, y); // it will display ==> Ahmed Ola when the function is called
  w = "Test"; // it is declared as a global in window object
};

func();
console.log(x, z); // it will display ==> Ahmed Undefind
console.log(w); // will run because it is defined as global

var x;
var z = "ASAS"; // will return undefined

//!################################################################################
