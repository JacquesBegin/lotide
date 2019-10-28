const equal = require('./eqArrays.js');
const assertEqual = require('./assertArraysEqual.js');

function middle(arr) {
  if (arr.length === 0 || arr.length === 1 || arr.length === 2) {
    return [];
  }
  if (arr.length % 2 === 0) {
    return [arr[((arr.length / 2) - 1)], arr[(arr.length / 2)]];
  }
  return [arr[Math.floor(arr.length / 2)]];
}

console.log(middle([]));
console.log(middle([1]));
console.log(middle([1, 2]));
console.log(middle([1, 2, 3]));
console.log(middle([1, 2, 3, 4]));
assertEqual(middle([1, 2, 3, 4]), [2, 3], true);
assertEqual(middle([1, 2, 3]), [2], true);
assertEqual(middle([1, 2, 3, 4, 5]), [2, 3], false);
assertEqual(middle([1, 2, 3, 3, 4]), [2], false)