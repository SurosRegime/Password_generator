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
var password = document.querySelector("#password");

var lowercaseChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercaseChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numericalChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialChar = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];

//Write pw to the #password input
function generatePassword() {
    console.log("You clicked the button")
}

    var password = generatePassword();
    var passwordChar = document.querySelector("#password");
 
if(userChoice >128 || userChoice <8){
    alert('Must be BETWEEN 8 & 128 characters')
    var passwordChar = prompt("Choose a password length of at least 8 characters and no more than 128 characters.");
}
 // Ensure that if someone clicks cancel for all password criteria that it asks them to choose at least one
 else if (lowercaseChar === false && uppercaseChar === false && num === false && specialChar === false) {
    alert("You must chose at least one password criteria.");
    var lowercaseChar = confirm("Do you want your password to contain lowercase letters?");
    var uppercaseChar = confirm("Do you want your password to contain uppercase letters?");
    var num = confirm("Do you want your password to contain numbers?");
    var specialChar = confirm("Do you want your password to contain special characters?");
}

// Use the criteria that are selected to generate the password
if (lowercaseChar) {
    optionsVariable += lowercaseAlphabet;
}

if (uppercaseChar) {
    optionsVariable += uppercaseAlphabet;
}

if (num) {
    optionsVariable += numbers;
}

if (specialChar) {
    optionsVariable += specialCharacters;
}
 // Generates a random password based on the criteria that have been selected
 for (var i = 0; i < passwordLength; i++) {
    // Continues to select a random character value from the string until it is the desired length
    randomString += optionsVariable.charAt(Math.floor(Math.random() * optionsVariable.length));
}
password.value = randomString;

//Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
console.log()