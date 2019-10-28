const assertEqual = require("./assertEqual.js");

function eqArrays(arr1, arr2) {
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) return false
    }
    return true;
  }
  return false;
}

assertEqual(eqArrays([1, 2, 3], [1, 2, 4]), true);

module.exports = eqArrays;