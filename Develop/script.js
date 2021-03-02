// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;
// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);


// This function generates random lower case letters
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

//This function generates random upper case letters
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

// This function generates random numbers 0-9
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
// This function generates random symbols 
function getRandomSymbol() {
  const symbols = '!@#$%^&*(){}[]=></,.';
  return symbols[Math.floor(Math.random() * symbols.length)];
}

console.log(getRandomSymbol());
