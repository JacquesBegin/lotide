// Function to reverse a string

function reverse(str) {
  let newStr = "";
  for (let x = 0; x < str.length; x++) {
    newStr = str[x] + newStr;
  }
  console.log(newStr);
}

reverse("Hello");