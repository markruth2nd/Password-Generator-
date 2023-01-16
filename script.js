// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  let length = parseInt(
  prompt("How may characters would you like your password to be?")
  )
  if(isNaN(length) === true) {
    alert("Password length must be provided as a number");
    return;
  } {
    if(length < 10) {
      alert("Password length must be at least 10 characters");
      return;
    } {
      if(length > 65) {
        alert("Password must be a maximum of 65 characters in length");
        return;
      }
    }
  }

  let hasLowerCaseCharacters = confirm("Click OK if you want your password to contain any Lower Case Characters")

  let hasUpperCaseCharacters = confirm("Click OK if you want your password to contain any Upper case Characters")

  let hasNumbericalCharacters = confirm("Click OK if you want your password to contain Numbers")

  let hasSpecialCharacters = confirm("Click OK if you want your password to contain any Special Characters")

  if(hasLowerCaseCharacters === false && hasUpperCaseCharacters === false && hasNumbericalCharacters === false && hasSpecialCharacters === false){ allert("Must select at least one character option")}
}



// Function for getting a random element from an array
function getRandom(arr) {
  let randomIndex = Math.floor(Math.random() * arr.length)
  let randomElement = arr[randomIndex];
  return randomElement;
}

// Function to generate password with user input
function generatePassword() {
  let options = getPasswordOptions();
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);