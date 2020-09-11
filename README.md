# Password Generator
Deployed Site: https://brandonp321.github.io/password-generator/

This is a rather simple website who's purpose is to take in user input on password length and character type criteria and generate a password given the specified criteria.  They are prompted for a length between 8 and 128 and whether they want the password to contain uppercase letters, lowercase letters, numbers and/or special characters.  The generator validates that the user input for password length is strictly a number between 8 and 128.  A second button was added to the site that, when clicked, selects and copies the password text to the user's clipboard on their computer.

## Site Images
![Password Generator blank page](/Assets/screen1.png)
![Password Generator with prompt](/Assets/screen2.png)

## Shuffle Algorithm
In order to shuffle the password characters after generating the password, I had to implement the Fisher-Yates algorithm.  Below is an image showing how the algorithm shuffles the string.
![Shuffle algorithm diagram](/Assets/shuffle.png)
