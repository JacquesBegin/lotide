// function to compare arrays for equality

const equalArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let x = 0; x < arr1.length; x++) {
    if (arr1[x] !== arr2[x]) {
      return false
    }
  }
  return true;
}

module.export = equalArrays;