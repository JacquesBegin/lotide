const eqArrays = require('./eqArrays.js');
const assertArraysEqual = require('./assertArraysEqual.js');

// Function to remove unwanted elements from an array.
// Parameter are for the source array and an array of elements to remove.

function without(src, toRemove) {
  let keepers = [];
  src.forEach((item) => {
    if (toRemove.indexOf(item) === -1) keepers.push(item);
  })
  return keepers;
}

console.log(without([1, 2, 3], [1]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));