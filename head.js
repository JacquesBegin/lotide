const equals = require("./assertEqual.js");

// Create a function that removes the first element of an array and returns it as 
// its original type (such as a string or number).

function head(arr) {
  return arr.shift();
}


equals(head(["Lighthouse Labs", "Bootcamp", "Yay!"]), "Lighthouse Labs");
equals(head([1, 2, 3, 4]), 1);
equals(head(["Lighthouse Labs", "Bootcamp", "Yay!"]), "Bootcamp");
equals(head([1, 2, 3, 4]), 4);
equals(head([]));

