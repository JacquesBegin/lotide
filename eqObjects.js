const assertEqual = require("./assertEqual.js");

// Only test equality for primitives not for nested objects!!
const eqObjects = function(obj1, obj2) {
  // Check that each object is the same size
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }

  // Loop through each key of the first object
  for(const item1 in obj1) {
    // Check if key is present in second object
    if (!obj2[item1]) return false;

    
    
    if (obj1[item1] !== obj2[item1]) return false;
    // TODO: incorporate check for arrays and objects. Objects check will be recrusive.

  }

  return true;
}

function checkIfArray(arr1, arr2) {
  if (Array.isArray(obj1[item1]) && Array.isArray(obj2[item1])) {
    if (obj1[item1].length !== obj2[item1].length) return false;

    for (let x = 0; x < obj1[item1].length; x++) {
      if ()
    }
    
  }
}

function check

function checkIfObject(obj) {

}

console.log(eqObjects({"a": "a", "b": "b", "c": "c"}, {"a": "a", "b": "b"}));