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


console.log(equalArrays([1, 2, 3, 4], [1, 2, 3, 4]));
console.log(equalArrays([2, 1, 4, 3], [1, 3, 4, 5]));