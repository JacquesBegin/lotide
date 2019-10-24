const equals = require("./assertEqual.js");

// Create a function that returns the tail of an array (everything except the first element).

function tail(arr) {
  let tmpArray = [];
  tmpArray = arr.slice(1);
  console.log(`arr: ${arr}`);
  return tmpArray;
}


equals(tail(["Lighthouse Labs", "Bootcamp", "Yay!"]), "Lighthouse Labs");
equals(tail([1, 2, 3, 4]), 1);
equals(tail(["Lighthouse Labs", "Bootcamp", "Yay!"]), ["Bootcamp", "Yay!"]);
equals(tail([1, 2, 3, 4]), [2, 3, 4]);
equals(tail([]));

