const eqArrays = require("./eqArrays.js");
const assertArraysEqual = require("./assertArraysEqual.js");


function flatten(arr) {
  let flattenedArray = [];
  for (let element of arr) {
    if (Array.isArray(element)) {
      flattenedArray = flattenedArray.concat(flatten(element));
    } else {
      flattenedArray.push(element);
    }
  }
  return flattenedArray;
}

console.log(flatten([1, 2, [3, 4, [5, 6, [7, 8, 9, [10, 11, 12]]]], 13, 14]));