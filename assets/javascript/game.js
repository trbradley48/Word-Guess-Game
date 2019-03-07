

// Declaration of variables
var wordArray = [];
var wordSelector = Math.random();

// Declaration of text varialbes in HTML
var directionsText = document.getElementById("directions-text");
var winsText = document.getElementById("wins-text");
var userGuessText = document.getElementById("userGuess-text");

// This function is run whenever the user presses a key
document.onkeyup = function(event) {


    // Determines which key was pressed
    var userGuess = event.key;
    console.log(userGuess);


    if (userGuess === 'a') {
        // Display the letter guessed by user
        userGuessText.textContent = "You chose: " + userGuess;
    }
    


}