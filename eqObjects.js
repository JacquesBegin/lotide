const assertEqual = require("./assertEqual.js");

// Only test equality for primitives not for nested objects!!
const eqObjects = function(obj1, obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }

  for(const item1 in obj1) {
    if (!obj2[item1] || obj1[item1] !== obj2[item1]) return false;
  }

  return true;
}

console.log(eqObjects({"a": "a", "b": "b", "c": "c"}, {"a": "a", "b": "b"}));