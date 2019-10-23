const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log("Not a match");
  } else {
    console.log("They match");
  }
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);