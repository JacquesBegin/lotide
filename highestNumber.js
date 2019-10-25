// function to find the highest/largest number in an array

function highest(arr) {
  let highest = arr[0];
  for (let x = 1; x < arr.length; x++) {
    if (arr[x] > highest) highest = arr[x];
  }
  console.log(highest);
}

highest([3, 4, 1, 652, 211, 43, 6]);