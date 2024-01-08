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

//1.1 Prompt user for password length (8 to 128 characters)
var passLength = Number(prompt("Please select your password length between 8 and 128 characters:")); 
                                                                                                                    
//1.2 If password length not correct, prompt `Password not correct length and return to select password length prompt"
while (passLength < 8 || passLength > 128) {
alert("Please choose a number between 8 and 128:");
passLength = Number(prompt("Please select your password length between 8 and 128 characters:")); 
}

//2.1 Ask user to select a character type from specialCharacters, numericCharacters, lowerCasedCharacters, upperCasedCharacters. 
var charTypes = [{
  name: "special characters",
  type: specialCharacters,
  user_selected: true
}, 
  {name: "numeric characters",
  type: numericCharacters,
  user_selected: true
}, 

  {name: "lower case characters",
  type: lowerCasedCharacters,
  user_selected: true
}, 
  {name: "upper case characters",
  type: upperCasedCharacters,
  user_selected: true
}];

for (var i=0; i < charTypes.length; i++) {
  charTypes[i].user_selected = confirm("Should the password include " + charTypes[i].name + " ?");
};

//TODO: !!!! NOT WORKING!!!!2.2 If user does not select any, prompt 'Please select at least one character type' and return to selection. If user selects at least one character type, then proceed to next step.

for (var i=0; i < charTypes.length; i++) {
  var selectConfirm = charTypes[i].user_selected;

if (selectConfirm === true) {
  alert("Awesome! Will get you a new password!");
  break;
} else {
  alert("Please select at least one character type!");
  var selectConfirm = confirm("Should the password include " + charTypes[i].name + " ?");
}
}
}

console.log("Password length is: " + prompt);

// Function for getting a random element from an array
function getRandom(arr) {
}

// Function to generate password with user input
function generatePassword() {

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

//8. Call all functions used in this file

getPasswordOptions(); 
getRandom(arr);
generatePassword();

