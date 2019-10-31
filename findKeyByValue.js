const assertArraysEqual = require("./assertArraysEqual.js");

const findKeyByValue = function(obj, value) {
  for (const item of obj) {
    if (obj[item] === value) return item;
  }
  return undefined;
}


}


