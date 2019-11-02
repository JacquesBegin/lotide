const assertEqual = require("./assertEqual.js");

// Only test equality for primitives not for nested objects!!
const eqObjects = function(obj1, obj2) {
  
  // Check that each object is the same size
  if ((obj1 && obj2) && Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }

  // Loop through each key of the first object
  

  return true;
}

function checkIfArray(item1, item2) {
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

console.log(equalObjects({"a": "a", "b": "b", "c": {"d": "d", "e": "e"}}, {"a": "a", "b": "b", "c": {"d": "d", "e": "e"}}));
console.log(equalObjects(1, {"a": "a", "b": "b"}));