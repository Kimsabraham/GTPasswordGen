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
function passwordDetails() {
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
    alert("Your password must be at least 8 chractes long! ");
    return;
  }
  // statment makes sure the input is less then 129 chracters
  if (length > 128) {
    alert("Your password cant be more then 128 chracters! ");
    return;
  }

  //true/false statments to confirm password input choices
  var symbols = confirm("Click ok if you want symbols in your password.");
  var numbers = confirm("Click ok if you want numbers in your password.");
  var lower = confirm(
    "Click ok if you want lowercase letters in your password."
  );
  var upper = confirm(
    "Click ok if you want uppercase letters in your password."
  );

  // this statment exits loop if all password options are cancelled.
  if (
    symbols === false &&
    numbers === false &&
    lower === false &&
    upper === false
  ) {
    alert("Must select at least one character type");
    return;
  }
  // Object to store user inputs
  var passwordDetails = {
    length: length,
    symbols: symbols,
    numbers: numbers,
    lower: lower,
    upper: upper,
  };
  return passwordDetails;
}
// Function goes into the arrays index and brings a random number and rounds it down and returns the element into the password options
function random(array) {
  var index = Math.floor(Math.random() * array.length);
  var randomElement = array[index];
  return randomElement;
}
// Function to generate password after storing user inputs
function generatePassword() {
  var options = passwordDetails();
  var result = [];
  var chracterOptions = [];
  var assured = [];

  if (options.symbols) {
    chracterOptions = chracterOptions.concat(symbols);
    assured.push(random(symbols));
  }

  //conditional statemnts that takes the users inputs into the option var, until the password generates the assured var
  if (options.numbers) {
    chracterOptions = chracterOptions.concat(numbers);
    assured.push(random(numbers));
  }
  if (options.lower) {
    chracterOptions = chracterOptions.concat(lower);
    assured.push(random(lower));
  }
  if (options.upper) {
    chracterOptions = chracterOptions.concat(upper);
    assured.push(random(upper));
  }

  // loop that takes the random potential variables and combines/concat the possible iuputs.
  for (var i = 0; i < options.length; i++) {
    var possibleCharacter = random(chracterOptions);
    result.push(possibleCharacter);
  }
  // adds at least 1 of the assured variables into the password
  for (var i = 0; i < assured.length; i++) {
    result[i] = assured[i];
  }

  // joins the results together and makes result into string
  return result.join("");
}
// creates button and listens for event of a click
var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
generateBtn.addEventListener("click", writePassword);
