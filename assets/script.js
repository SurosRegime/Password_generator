//GIVEN I need a new, secure password
//WHEN I click the button to generate a password
//THEN I am presented with a series of prompts for password criteria
//WHEN prompted for password criteria
//THEN I select which criteria to include in the password
//WHEN prompted for the length of the password
//THEN I choose a length of at least 8 characters and no more than 128 characters
//WHEN asked for character types to include in the password
//THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
//WHEN I answer each prompt
//THEN my input should be validated and at least one character type should be selected
//WHEN all prompts are answered
//THEN a password is generated that matches the selected criteria
//WHEN the password is generated
//THEN the password is either displayed in an alert or written to the page

//Get references to the #generate element
var generateBtn = document.querySelector("#generate")

// Accepted characters
var lowercaseChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercaseChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numericalChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialChar = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
var possibleChar = [];

//Write pw to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
  
//Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);


    // Clear previous password from screen
    //password.value === "";
    //var randomString = "";

 // Choose password criteria
 var hasLower = confirm("Do you want your password to contain lowercase letters?");
 var hasUpper = confirm("Do you want your password to contain uppercase letters?");
 var hasNum = confirm("Do you want your password to contain numbers?");
 var hasSpec = confirm("Do you want your password to contain special characters?");
 var passwordChar = prompt("Choose a password length of at least 8 characters and no more than 128 characters.");

//Check if right length 
if(passwordChar >128 || passwordChar <8){
    alert('Must be BETWEEN 8 & 128 characters')
    var passwordChar = prompt("Choose a password length of at least 8 characters and no more than 128 characters.");
    
}
 // Ensure that if someone clicks cancel for all password criteria that it asks them to choose at least one
 else if (hasLower === false && hasUpper === false && hasNum === false && hasSpec === false) {
    alert("You must chose at least one password criteria.");
    var hasLower = confirm("Do you want your password to contain lowercase letters?");
    var uhasUpper = confirm("Do you want your password to contain uppercase letters?");
    var hasNum = confirm("Do you want your password to contain numbers?");
    var hasSpec = confirm("Do you want your password to contain special characters?");
}

// Use the criteria that are selected to generate the password
if (lowercaseChar) {
    optionsVariable += lowercaseAlphabet;
}

if (hasUpper) {
    optionsVariable += uppercaseAlphabet;
}

if (numericalChar) {
    optionsVariable += numbers;
}

if (hasSpec) {
    optionsVariable += specialCharacters;
}
 // Generates a random password based on the criteria that have been selected
 for (var i = 0; i < passwordLength; i++) {
    // Continues to select a random character value from the string until it is the desired length
    randomString += optionsVariable.charAt(Math.floor(Math.random() * optionsVariable.length));
}
password.value = randomString;

