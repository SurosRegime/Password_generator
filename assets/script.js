

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


    // 

 // Choose password criteria
 var hasLower = confirm("Do you want your password to contain lowercase letters?");
 var hasUpper = confirm("Do you want your password to contain uppercase letters?");
 var hasNum = confirm("Do you want your password to contain numbers?");
 var hasSpec = confirm("Do you want your password to contain special characters?");
 var passwordChar = prompt("Choose a password length of at least 8 characters and no more than 128 characters.");

//Input and check if right length 
var passwordChar = prompt("Choose a password length of at least 8 characters and no more than 128 characters.");
if(passwordChar >128 || passwordChar <8){
    alert('Must be BETWEEN 8 & 128 characters')
    
    
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
if (hasLower) {
    possibleChar = possibleChar;
}

if (hasUpper) {
    possibleChar += uppercaseChar;
}

if (hasNum) {
    possibleChar += numericalChar;
}

if (hasSpec) {
    possibleChar += specialCharacters;
}
 // Generates a random password based on the criteria that have been selected
 for (var i = 0; i < passwordChar; i++) {
    // Continues to select a random character value from the string until it is the desired length
    randomString += possibleChar.charAt(Math.floor(Math.random() * possibleChar.length));
}
password.value = randomString;

