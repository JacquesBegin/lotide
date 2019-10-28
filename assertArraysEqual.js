
function eqArrays(arr1, arr2) {
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) return false
    }
    return true;
  }
  return false;
}

function assertArraysEqual(arr1, arr2, expected) {
  (eqArrays(arr1, arr2) === expected) ? console.log(`✅ Assertion Passed`) : console.log(`⛔️ Assertion Failed`);
}

assertArraysEqual([1, 2, 3], [1, 2, 4], false);