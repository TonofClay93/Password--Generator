// Assignment code here


// Get references to the #generate element

var generateBtn = document.querySelector("#generate");
//ask for password length function
function generatePassword() {
  var passLength = prompt("How long would you like the password to be? (Between 8-128) ");
  
  //reset if they cant choose right amount.
  if (passLength < 8 || passLength > 128) {
    alert("Please make sure you choose between 8 and 128 for the best security!");
    return generatePassword ();
  }
  if (passLength >=8 && passLength <= 128) {
    //prompts for password criteria
    var speChar = confirm("Would you like to include special characters?");
    
    var num = confirm("Would you like to include numbers?");
    var lowerChar = confirm("Would you like to include lowercase letters?");
    var upperChar = confirm("Would you like to include uppercase characters?");
    }
    //if function to ensure user selects criteria
  if (speChar === false && num === false && lowerChar === false && upperChar === false) {
    alert("Whoops, you forgot to choose one! Lets try again!");
    return generatePassword();
  }
  // if functions for choices
  if (speChar) {
    var speChar = ["!@#$%^&*()"];
  }
  if (speChar===false) {
    var speChar = [""];
  }
  if (num) {
    var num = ["0123456789"];
  }
  if (num===false) {
    var num = [""];
  }
  if (lowerChar) {
    var lowerChar = ["abcdefghijklmnopqrstuvwxyz"];
  }
  if (lowerChar===false) {
    var lowerChar = [""];
  }
  if (upperChar) {
    var upperChar = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
  }
  if (upperChar === false) {
    var upperChar = [""];
  }
  var randoLetter = speChar + num + lowerChar + upperChar
  //for loop in o(rd)er to generate password that is the length specified by the user
  var password = ("");
  for (var i = 0; i < passLength; i++) {
    var truelyRandom = randoLetter[Math.floor(Math.random() * randoLetter.length)];
    password += truelyRandom;
  }
  //finally return the password
  return password
}
  
  
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
