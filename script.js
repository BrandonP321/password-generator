// Assignment Code
var generateBtn = document.querySelector("#generate");


function generateCharacters(length, criteria) {
  var alphabet = 'abcdefghijklmnopqrstuvwxyz';
  var specialChars = ['@', '%', '/', '#', '$', '^', '~', '(', ')', '{'];
  var character;
  var password = '';
  var location = '';
  for (var i = 1; i <= length; i++) {
    if (criteria === 'lower') {
      location = Math.floor(Math.random() * 26)
      character = alphabet[location]
      password += character
    } else if (criteria === 'upper') {
      location = Math.floor(Math.random() * 26)
      character = alphabet[location]
      password += character.toUpperCase()
    } else if (criteria === 'numeric') {
      character = Math.floor(Math.random() * 10)
      character = `${character}`
      password += character
    }  else if (criteria === 'special') {
      location = Math.floor(Math.random() * 10)
      character = specialChars[location]
      password += character
    }
  }
  return password
}

function generatePassword() {
  password = '';
  var length;
  var tasks = [];

  do {
    length = prompt("How many characters long should your password be? (must be between 8 and 128)")
  } while (length < 8 || length > 128 || typeof(parseInt(length)) != typeof(1))
  length = parseInt(length)

  var hasLower = confirm("Would you like the password to contain lowercase letters?")
  var hasUpper = confirm("Would you like the password to contain uppercase letters?")
  var hasNumbers = confirm("Would you like the password to contain numbers?")
  var hasSpecial = confirm("Would you like the password to contain any special characters?")

  if (hasLower) {
    tasks.push('lower')
  }
  if (hasUpper) {
    tasks.push('upper')
  }
  if (hasNumbers) {
    tasks.push('numeric')
  }
  if (hasSpecial) {
    tasks.push('special')
  }

  var charsLeft = length;
  charsPerTask = length / tasks.length
  for (i = 0; i < tasks.length; i++) {
    if (i === tasks.length - 1) {
      password += generateCharacters(charsLeft, tasks[i])
    } else {
      password += generateCharacters(charsPerTask, tasks[i])
      charsLeft -= charsPerTask
    }
  }
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
