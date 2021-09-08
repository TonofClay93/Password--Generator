// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//ask for password length function
function generatePassword() {
  var passLength = prompt("How long would you like the password to be? (Between 8-128) ");
  //reset if they cant choose right amount.
  if (passLength < 8 || passLength > 128) {
    alert("Please enter a character length that is between 8 and 128");
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
    if (speChar===false && num===false && lowerChar===false && upperChar===false) {
      alert("Please confirm a set of criteria!");
      return generatePassword();
    }
  }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
