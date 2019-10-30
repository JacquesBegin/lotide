const assertEqual = require("./assertEqual.js");

const countOnly = function(allItems, itemsToCount) {

}


const firstNames = [
  "Karl",
  "Carl",
  "Salimander",
  "Algae",
  "Fang",
  "Koloth",
  "Kang",
  "Fang",
  "Algae"
]

const result1 = countOnly(firstNames, {"Kang": true, "Dingo": true, "Fang": true});

assertEqual(result1["Kang"], 1);
assertEqual(result1["Dingo"], undefined);
assertEqual(result1["Fang"], 2)