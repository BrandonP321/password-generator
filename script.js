// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var length;
  do {
    length = prompt("How many characters long should your password be? (must be between 8 and 128)")
  } while (8 > length > 128 || typeof(parseInt(length)) != Number)
  var hasLower = confirm("Would you like the password to contain lowercase letters?")
  var hasUpper = confirm("Would you like the password to contain uppercase letters?")
  var hasNumbers = confirm("Would you like the password to contain numbers?")
  var hasSpecial = confirm("Would you like the password to contain any special characters?")
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
