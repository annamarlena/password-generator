// Declare variables to store the answers to the prompts 
var numChars 
var lowerCase = true;
var upperCase = true;
var numeric = true;
var specialChars = true;

// Store the final concatenated string of random characters
var newPassword  

// Create the function called generatePassword() as per the given code
function generatePassword() {

  // Create an array that holds only the character types chosen by the client
  var chosenChars = [];

  // Create an empty array to store the randomly generated password characters
  var pwArray = [];

  // Function that prompts for pw length (includes an if/else for min 8, max 128 characters)
  function getLength() {
    numChars = prompt("How many characters long would you like your password to be? (Choose a number from 8-128)");

    if ( numChars < 8 || numChars > 128 ) {
        getLength();
    }
      else {
        return numChars;
      }
  }
      // Create the prompts for the desired character types and store them in an array
      function charTypes() {
      // Create an array to store the lowercase letters of the alphabet
      const alphabet = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];

      // Create an array to store the uppercase letters of the alphabet
      const bigAlphabet = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ];

      // Create an array to store our number choices
      const numChoices = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    
      // Create an array to store the special character options
      const symbols = [ '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '<', ',', '>', '.', '?', '/', '[', '{', ']', '}', ';', ':', '"', '`', '~' ];

      // Ask client if they want lowercase letters in their password
      lowerCase = confirm("Do you want any lowercase letters in your password?");
      if (lowerCase === true ) {
        chosenChars = chosenChars.concat(alphabet);   // If yes, add them into an array
      }
      
      // Ask client if they want uppercase letters in their password
      upperCase = confirm("Do you want any uppercase letters in your password?");
      if ( upperCase === true ) {
        chosenChars = chosenChars.concat(bigAlphabet);  // If yes, add them into an array
      }
      
      // Ask client if they want numbers in their password
      numeric = confirm("Do you want any numbers in your password?");
      if ( numeric === true ) {
        chosenChars = chosenChars.concat(numChoices);  // If yes, add them into an array
      }

      // Ask client if they want special characters in their password
      specialChars = confirm("Do you want any special characters in your password?");
      if ( specialChars === true ) {
        chosenChars = chosenChars.concat(symbols);  // If yes, add them into an array
    }

    // Create the random password based on client's responses
    for( i = 0; i < numChars; i++ ) {
      // Select a random character from the array
      var nextRando = chosenChars[Math.floor(Math.random() * chosenChars.length)]
      pwArray.push(nextRando);
    }
  }

  // Call the function that establishes the pw length
  getLength()

  // call the function that creates the array of options
 charTypes()

  // Convert password from an array into a string & return it
  newPassword = pwArray.join('');
  return newPassword;
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

