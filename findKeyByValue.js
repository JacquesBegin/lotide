const assertEqual = require("./assertEqual.js");

const findKeyByValue = function(obj, value) {
  for (const item in obj) {
    if (obj[item] === value) return item;
  }
  return undefined;
}

const shows = {
  "sci-fi": "Star Trek",
  "action": "Diehard",
  "drama": "Lame Movie"
}

assertEqual(findKeyByValue(shows, "Star Trek"), "sci-fi");


