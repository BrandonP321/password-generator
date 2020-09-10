// Assignment Code
var generateBtn = document.querySelector("#generate");

// Fisher-Yates algorithm to shuffle the password
function shuffleArr(password) {
  // split the string into an array first
  passwordArr = password.split('');
  for (var i = passwordArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i)
    const temp = passwordArr[i]
    passwordArr[i] = passwordArr[j]
    passwordArr[j] = temp
  }
  // join the now shuffled array back into a single string
  password = passwordArr.join('')
  return password
}

// function to generate a given amount of random characters based on the criteria
function generateCharacters(length, criteria) {
  var alphabet = 'abcdefghijklmnopqrstuvwxyz';
  var specialChars = ['@', '%', '/', '#', '$', '^', '~', '(', ')', '{'];
  var character;
  var password = '';
  var location = '';
  // create random characters and append them to the password
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

// main function for generating the password
function generatePassword() {
  password = '';
  var length;
  var tasks = [];

  // keep asking user for input until it is a number between 8 and 128 inclusive
  do {
    length = prompt("How many characters long should your password be? (must be between 8 and 128)")
  } while ((length < 8 || length > 128) && typeof(parseInt(length)) != '')
  length = parseInt(length)

  // confirm which criteria should be used when creating the password
  var hasLower = confirm("Would you like the password to contain lowercase letters?")
  var hasUpper = confirm("Would you like the password to contain uppercase letters?")
  var hasNumbers = confirm("Would you like the password to contain numbers?")
  var hasSpecial = confirm("Would you like the password to contain any special characters?")

  // based on criteria chosen, add that criteria to array 'tasks'
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

  // evenly split up number of characters chosen per criteria type
  var charsLeft = length;
  charsPerTask = length / tasks.length
  // for each character in the password, delegate the task of creating the characters to the generateCharacters() function
  for (i = 0; i < tasks.length; i++) {
    if (i === tasks.length - 1) {
      password += generateCharacters(charsLeft, tasks[i])
    } else {
      password += generateCharacters(charsPerTask, tasks[i])
      charsLeft -= charsPerTask
    }
  }
  // shuffle and return the password
  password = shuffleArr(password)
  return password
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  
}

// function to select and copy the text inside the element containing the password
function copyPassword() {
  var textToCopy = document.getElementById('password')
  textToCopy.select()
  document.execCommand("copy")
  alert("Password copied to clipboard")
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
