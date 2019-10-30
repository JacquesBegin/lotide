const assertEqual = require("./assertEqual.js");

const countOnly = function(allItems, itemsToCount) {
  let counted = {};
  allItems.forEach(element => {
    if (itemsToCount[element]) {
      console.log("Hi");
      if (counted[element]) {
        counted[element]++;
      } else {
        counted[element] = 1;
      }
    }
  });
  return counted;
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