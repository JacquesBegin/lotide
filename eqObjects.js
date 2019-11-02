const assertEqual = require("./assertEqual.js");


// Check if argument is an array
function checkIfArray(arr) {
  return Array.isArray(arr);
}

// Check if arrays are equal
function checkArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (!compareItems(arr1[i], arr2[i])) return false;
  }
  return true;
}

// Check if argument is a function
function checkIfFunction(func) {
  return typeof func === "function";
}

// Check if both arguments are the same function
function checkFunctions(func1, func2) {
  if (func1.toString() !== func2.toString()) return false;
  return true;
}


// Check that argument is an object literal
function checkIfObject(obj) {
  if (obj === null || typeof obj === "function") return false;
  return typeof obj === "object";
}

// Deep/nested check if two objects are equal
const checkObjects = function(obj1, obj2) {
  
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

// Run comparsion between object keys checking if each is an array, object,
// function, or primitive
function compareItems(item1, item2) {
  if (checkIfArray(item1) && checkIfArray(item2)) {
    if (!checkArrays(item1, item2)) return false;
  } else if (checkIfObject(item1) && checkIfObject(item2)) {
    if (!checkObjects(item1, item2)) return false;
  } else if (checkIfFunction(item1) && checkIfFunction(item2)) {
    if (!checkFunctions(item1, item2)) return false;
  } else {
    if (item1 !== item2) return false;
  }
  return true;
}


function equalObjects(obj1, obj2) {
  // Check that both arguments are objects, throw error if not
  if (!(checkIfObject(obj1) && checkIfObject(obj2))) {
    throw "One or both agruments are not an OBJECT";
  }
  try {
    return checkObjects(obj1, obj2);
  }
  catch(e) {
    // expected output: "One or both agruments are not an OBJECT"
    console.error(e);
  }
}

const testObj1 = {
  id: 101,
    email: 'jack@dev.com',
    address: {
      line1: 'westwish st',
      line2: 'washmasher',
      city: 'wallas',
      state: 'WX',
      arr: [1, 2, 3, {
                      "1": "1", 
                      "2": "2", 
                      "3": [4, 5, 6, [45, 54, 32], {
                                                    "hi": "hi",
                                                    "bye": "bye"
                                                    }
                            ]
                      }
            ]
    },
    personalInfo: {
        name: 'Jack',
        address: {
            line1: 'westwish st',
            line2: 'washmasher',
            city: 'wallas',
            state: 'WX',
            arr: [1, 2, 3, {
                            "1": "1", 
                            "2": "2", 
                            "3": [4, 5, 6, [45, 54, 32], {
                                                          "hi": "hi",
                                                          "bye": "bye"
                                                          }
                                  ]
                            }
                  ]
        }
    },
    position: 'cashier',
    type: 'hourly',
    isAvailable: true,
    showDetails() {
        const accepting = this.isAvailable ? 'is accepting applications' : "is not currently accepting applications";

        console.log(`The ${this.position} position is ${this.type} and ${accepting}.`);
    }
}

const testObj2 = {
  id: 101,
    email: 'jack@dev.com',
    address: {
      line1: 'westwish st',
      line2: 'washmasher',
      city: 'wallas',
      state: 'WX',
      arr: [1, 2, 3, {
                      "1": "1", 
                      "2": "2", 
                      "3": [4, 5, 6, [45, 54, 32], {
                                                    "hi": "hi",
                                                    "bye": "bye"
                                                    }
                            ]
                      }
            ]
    },
    personalInfo: {
        name: 'Jack',
        address: {
            line1: 'westwish st',
            line2: 'washmasher',
            city: 'wallas',
            state: 'WX',
            arr: [1, 2, 3, {
                            "1": "1", 
                            "2": "2", 
                            "3": [4, 5, 6, [45, 54, 32], {
                                                          "hi": "hi",
                                                          "bye": "bye"
                                                          }
                                  ]
                            }
                  ]
        }
    },
    position: 'cashier',
    type: 'hourly',
    isAvailable: true,
    showDetails() {
        const accepting = this.isAvailable ? 'is accepting applications' : "is not currently accepting applications";

        console.log(`The ${this.position} position is ${this.type} and ${accepting}.`);
    }
}

const funcObj1 = {
  showDetails() {
    const accepting = this.isAvailable ? 'is accepting applications' : "is not currently accepting applications";

    console.log(`The ${this.position} position is ${this.type} and ${accepting}.`);
  }
}

const funcObj2 = {
  showDetails() {
    const accepting = this.isAvailable ? 'is accepting applications' : "is not currently accepting applications";

    console.log(`The ${this.position} position is ${this.type} and ${accepting}.`);
  }
}

console.log(equalObjects({"a": "a", "b": "b", "c": {"d": "d", "e": {"f": "f", "g": "g"}}}, {"a": "a", "b": "b", "c": {"d": "d", "e": {"g": "g", "f": "f"}}}));
// console.log(equalObjects(1, {"a": "a", "b": "b"}));
console.log(equalObjects(testObj1, testObj2));
console.log(equalObjects(funcObj1, funcObj2));