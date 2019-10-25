// Function to find the lowest number in an array

const lowestNumber = function(arr) {
  if (!arr.length) {
    return "Array has no elements.";
  } else if (arr.length === 1) {
    return arr[0];
  } else {
    let lowest = arr[0];
    for (let x = 1; x < arr.length; x++) {
      lowest = lowest < arr[x] ? lowest : arr[x];
    }
    return lowest;
  }
}

console.log(lowestNumber([4, 2, 6, 34, 5, 9]));