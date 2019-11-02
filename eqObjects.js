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
    else if (checkIfArray(obj1[item]) && checkIfArray(obj2[item])) {
      
    
  // else if (!checkIfArray(obj1[item], obj2[item])) return false;
    } else if (checkIfObject(obj1[item]) && checkIfObject(obj2[item])) {
      if (!eqObjects(obj1[item], obj2[item])) return false;
    } else {
      if (obj1[item] !== obj2[item]) return false;
    }
  }

  return true;
}

function checkIfArray(arr) {
  return Array.isArray(arr);
}

function checkArrays(item1, item2) {
  if (Array.isArray(item1) && Array.isArray(item)) {
    if (obj1[item1].length !== obj2[item1].length) return false;


    // for (let x = 0; x < obj1[item1].length; x++) {
    //   if ()
    // }
    
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