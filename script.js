  // Declare variables to store the answers to the prompts (Also: Do these need to remain global?)
  var numChars 
  var lowerCase = true;
  var upperCase = true;
  var numeric = true;
  var specialChars = true;
  var password

// Need to wrap the below code into a function called generatePassword() 
// Unsure how to get it to output to the webpage
function generatePassword() {

  // Create an array that holds only the character types chosen by the client
  var chosenChars = [];

  // Create an empty array to store the randomly generated password characters
  var pwArray = [];

  // (The prompt for pw length must include an if/else for min 8, max 128 characters)
  function getLength() {
    numChars = prompt("How many characters long would you like your password to be? (Choose a number from 8-128)");

    if (numChars < 8 || numChars > 128) {
        getLength();
    }
      else {
        return numChars;
      }
  //    console.log("Password length: " + pwArray.length); // test
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
    // If yes, add them into an array
    if (lowerCase === true ) {
      chosenChars = chosenChars.concat(alphabet);
    //  console.log("Array of characters to choose from: " + chosenChars)  // test
    }
    
    // Ask client if they want uppercase letters in their password
    upperCase = confirm("Do you want any uppercase letters in your password?");
    // If yes, add them into an array
    if ( upperCase === true ) {
      chosenChars = chosenChars.concat(bigAlphabet);
    //  console.log("Array of characters to choose from: " + chosenChars)  // test
    }
    
    // Ask the client if they want numbers in their password
    numeric = confirm("Do you want any numbers in your password?");
    // If yes, add them into an array
    if ( numeric === true ) {
      chosenChars = chosenChars.concat(numChoices);
    //  console.log("Array of characters to choose from: " + chosenChars)  // test
    }

    // Ask the client if they want special characters in their password
    specialChars = confirm("Do you want any special characters in your password?");
    // If yes, add them into an array
    if ( specialChars === true ) {
      chosenChars = chosenChars.concat(symbols);
    //  console.log("Array of characters to choose from: " + chosenChars)  // test
    }

    // Create the random password
    for( i = 0; i < numChars; i++ ) {
      // Select a random character from the array
      var nextRando = chosenChars[Math.floor(Math.random() * chosenChars.length)]
    //  console.log("Random character: " + nextRando); // test
      // Add it to the password array
      pwArray.push(nextRando);
    }
    console.log("Your password is: " + pwArray); // test

    // Convert password from an array into a string using concatenation
    password = pwArray.join('');
    console.log(password)  // test
    return password;
  }

  // Call the function that establishes the pw length
  getLength()
  console.log("Password length should be: " + numChars); // Test

  // call the function that creates the array of options
  charTypes()

  // Finally, provide the password to the client
  alert("Your password is: " + password)
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

writePassword()