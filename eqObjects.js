const assertEqual = require("./assertEqual.js");

// Deep/nested check if two objects are equal
const eqObjects = function(obj1, obj2) {
  
  // Check that each object is the same size
  if ((obj1 && obj2) && Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }

  // Loop through each key of the first object
  for(const item in obj1) {
    // Check if key is present in second object
    if (!obj2[item]) return false;
    if (!compareItems(obj1[item], obj2[item])) return false;
  }
  return true;
}

function compareItems(item1, item2) {
  if (checkIfArray(item1) && checkIfArray(item2)) {
    if (!checkArrays(item1, item2)) return false;
  } else if (checkIfObject(item1) && checkIfObject(item2)) {
    if (!eqObjects(item1, item2)) return false;
  } else {
    if (item1 !== item2) return false;
  }
  return true;
}

// Check if argument is an array
function checkIfArray(arr) {
  return Array.isArray(arr);
}

// Check if arrays are equal
function checkArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if ()
  }

  return false;
}


// Check that argument is an object literal
function checkIfObject(obj) {
  if (obj === null || typeof obj === "function") return false;
  return typeof obj === "object";
}


function equalObjects(obj1, obj2) {
  // Check that both arguments are objects, throw error if not
  if (!(checkIfObject(obj1) && checkIfObject(obj2))) {
    throw "Agrument not an OBJECT";
  }

  try {
    return eqObjects(obj1, obj2);
  }

  catch(e) {
    // expected output: "Agrument not an OBJECT"
    console.error(e);
  }
}

console.log(equalObjects({"a": "a", "b": "b", "c": {"d": "d", "e": {"f": "f", "g": "g"}}}, {"a": "a", "b": "b", "c": {"d": "d", "e": {"g": "g", "f": "f"}}}));
console.log(equalObjects(1, {"a": "a", "b": "b"}));