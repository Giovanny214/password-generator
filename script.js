// Assignment Code
var generateBtn = document.querySelector("#generate");

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialC = ["!", "@", "#", "$", "%", "&", "*", "_", "-", "?"];

function generatePassword() {
  // step 1 ask for characters and limit the amount of characters
  var userChoice = window.prompt("How many characters would you like your password to contain?");
  userChoice = parseInt(userChoice);
  console.log(userChoice);

  if (userChoice > 20 || userChoice < 8 || !userChoice) {
    window.alert("Must contain at least 8 characters and no more than 20.");
    return generatePassword();
  } //done

  var possiblities = [];
  var wantUpper = window.confirm("Click OK to include UPPERCASE letters");
  if (wantUpper) {
    possiblities = possiblities.concat(upperCase);
  }

  var wantLower = window.confirm("Click OK to include lowercase letters");
  if (wantLower) {
    possiblities = possiblities.concat(lowerCase);
  }

  var wantSpecial = window.confirm("Click OK to include Special Characters");
  if (wantSpecial) {
    possiblities = possiblities.concat(specialC);
  }

  var wantNumber = window.confirm("Click OK to include numbers");
  if (wantNumber) {
    possiblities = possiblities.concat(numbers);
  }

  console.log(possiblities);

  var passWord = "";
  for (let i = 0; i < userChoice; i++) {
    var randomIndex = Math.floor(Math.random() * possiblities.length);
    var randomCharacter = possiblities[randomIndex]
    passWord += randomCharacter
  }
  console.log(passWord);
  return passWord;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
