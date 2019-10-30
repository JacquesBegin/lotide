const assertEqual = require("./assertEqual.js");

function countLetters(str) {
  let letterCount = {};
  for (let letter of str) {
    if (letterCount[letter]) {
      letterCount[letter]++;
    } else {
      letterCount[letter] = 1;
    }
  }
  return letterCount;
}

assertEqual(countLetters("hello")["l"], 2);