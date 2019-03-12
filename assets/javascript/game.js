

// Declaration of variables
var wordArray = ["metallica", "sabath"];
var wordSelected = wordArray[Math.floor(Math.random() * wordArray.length)];
var underscoreWord = [];

// Create array filled with '_' for selected word
for (var i = 0; i < wordSelected.length; i++) {
    underscoreWord[i] = "_";
}

console.log(wordSelected);
console.log(underscoreWord);


// Declaration of text varialbes in HTML
var directionsText = document.getElementById("directions-text");
var winsText = document.getElementById("wins-text");
var userGuessText = document.getElementById("userGuess-text");
var underscoreWordText = document.getElementById("underscoreWord-text");

underscoreWordText.textContent = underscoreWord.toString();

// This function is run whenever the user presses a key
document.onkeyup = function(event) {


    // Determines which key was pressed
    var userGuess = event.key;
    // console.log(userGuess);
    // console.log(event);


    if (65 <= userGuess <= 90 ) {
        // Display the letter guessed by user
        directionsText.textContent = "";
        userGuessText.textContent = "You chose: " + userGuess;

        for (var j = 0; j < wordSelected.length; j++) {
            if (wordSelected.charAt(j) === userGuess) {
                underscoreWord[j] = userGuess;
            }
        }
        console.log(underscoreWord);
        underscoreWordText.textContent = underscoreWord.toString();
    }
    


}