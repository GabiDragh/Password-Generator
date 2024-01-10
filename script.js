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

var passLength = Number(prompt("Please select your password length between 8 and 128 characters:")); //variable moved from inside function to a global position because it is used again in 

// 1. Function to prompt user for password options
function getPasswordOptions() {

 //1.1 Prompt user for password length (8 to 128 characters)
 //var passLength = Number(prompt("Please select your password length between 8 and 128 characters:")); 
                                                                                                                    
 //1.2 If password length not correct, prompt `Password not correct length and return to select password length prompt"
  while (passLength < 8 || passLength > 128) {
   alert("Please choose a number between 8 and 128:");
   passLength = Number(prompt("Please select your password length between 8 and 128 characters:")); 
   }

 //1.3 Ask user to select a character type from specialCharacters, numericCharacters, lowerCasedCharacters, upperCasedCharacters. 
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

 //1.4 If user does not select any, prompt 'Please select at least one character type' and return to selection. If user selects at least one character type, then proceed to next step.

 for (var i=0; i < charTypes.length; i++) {
  var selectConfirm = charTypes[i].user_selected;

    if (selectConfirm === true) {
      alert("Awesome! Will get you a new password!");
     break;
    } else {
     alert("Please select at least one character type!");
     //var selectConfirm = confirm("Should the password include " + charTypes[i].name + " ?");
     return;
    }
  }
}

// 2. Function for getting a random element from an array
function getRandom(charArr) {

 //2.1 Created an array variable combining the special characters arrays to randomly select from
 var charArr = [specialCharacters, numericCharacters, lowerCasedCharacters, upperCasedCharacters];
 console.log(charArr);

 //2.2 Random character selection
 var selectedArr = charArr[Math.floor(Math.random() * charArr.length)];
 return selectedArr[Math.floor(Math.random() * charArr.length)];

// 3. Function to generate password with user input
 function generatePassword() {
  //3.1 Defined password generated criteria
  var { passLength, selectedArr} = getPasswordCriteria;
  //3.2 Defined password variable
  var password = ""; 
  
  for(let i = 0; i < passLength; i++) {
    password += passLength-1 + selectedArr;
  }
  
  console.log(password);
}
}
// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// 6. Add event listener to generate button
var generateButton = document.getElementById('generateBtn');
generateBtn.addEventListener('click', writePassword);

//7. Call all functions used in this file

getPasswordOptions(); 
getRandom(specialCharacters);
getRandom(numericCharacters);
getRandom(lowerCasedCharacters);
getRandom(upperCasedCharacters);
generatePassword();
