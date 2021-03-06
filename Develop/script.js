//array of symbols
var symbols = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numbers
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// Array of lowercase
var lower = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
// Array of uppercase
var upper = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
// prompt asking user how long they would like their password to be, using parseInt to make sure we get a integer as a input
function getPasswordOptions() {
  var length = parseInt(
    prompt("How many characters would you like your password to contain?")
  );
  // Conditional statement to check if password length is a number, if false loop ends.
  if (isNaN(length) === true) {
    alert("Password length must be provided as a number");
    return;
  }
  // statment that makes sure input is at least 8 or more chracters 
  if (length < 8) {
    alert("Password length must be at least 8 characters");
    return;
  }
  // statment makes sure the input is less then 129 chracters
  if (length > 128) {
    alert("Password length must less than 129 characters");
    return;
  }

  //true/false statments to confirm password input choices
  var symbols = confirm("Click OK to confirm including special characters.");
  var numbers = confirm("Click OK to confirm including numeric characters.");
  var lower = confirm("Click OK to confirm including lowercase characters.");
  var upper = confirm("Click OK to confirm including uppercase characters.");
 