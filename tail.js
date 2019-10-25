const equals = require("./assertEqual.js");
const equalArrays = require("./compareArrays.js");

// Create a function that returns the tail of an array (everything except the first element).

function tail(arr) {
  let tmpArray = [];
  tmpArray = arr.slice(1);
  console.log(`arr: ${arr}`);
  return tmpArray;
}


// equals(tail(["Lighthouse Labs", "Bootcamp", "Yay!"]), "Lighthouse Labs");
// equals(tail([1, 2, 3, 4]), 1);
// equals(tail(["Lighthouse Labs", "Bootcamp", "Yay!"]), ["Bootcamp", "Yay!"]);
// equals(tail([1, 2, 3, 4]), [2, 3, 4]);
// equals(tail([]));

let arr1 = ["Lighthouse Labs", "Bootcamp", "Yay!"];
let arr2 = [1, 2, 3, 4];
let tailArr1 = tail(arr1);
let tailArr2 = tail(arr2);
let expectedArr1 = ["Bootcamp", "Yay!", "D"];
let expectedArr2 = [2, 3, 4];

console.log(equalArrays(tailArr1, expectedArr1));
console.log(equalArrays(tailArr2, expectedArr2));

// let equal = true;

// if (tailArr1.length === expectedArr1.length) {
//   for (let x = 0; x < tailArr1.length; x++) {
//     equals(tailArr1[x], expectedArr1[x]) 
//   }
// } else {
//   console.log("Not equal lengths.");
//   equal = false;
// }

// console.log(`equals: ${equal}`);
