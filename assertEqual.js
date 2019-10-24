const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`⛔️ Assertion Failed ${actual} !== ${expected}`);
  } else {
    console.log(`✅ Assertion Passed ${actual} === ${expected}`);
  }
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Bootcamp", "Bootcamp");
assertEqual(1, 12);