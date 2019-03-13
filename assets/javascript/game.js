

// Declaration of variables
var wordArray = ["metallica", "sabath", "black", "guns", "roses"];
var wordSelected;
var underscoreWord = [];
var underscoreWordJoined = underscoreWord.join(' ');
var guessedLetters = [];
var updateGuessedLetters = true;
var guessesLeft = 10;
var updateLetter = false;
var wins = 0;
var winner = false;

// Declaration of text varialbes in HTML
var directionsText = document.getElementById("directions-text");
var winsText = document.getElementById("wins-text");
var userGuessText = document.getElementById("userGuess-text");
var underscoreWordText = document.getElementById("underscoreWord-text");
var guessedLettersText = document.getElementById("guessedLetters-text");
var guessesLeftText = document.getElementById("guessesLeft-text");

guessedLettersText.textContent = "Letters guessed: " + guessedLetters.toString();

// Create array filled with '_' for selected word

function newGame() {
    underscoreWord = [];
    guessedLetters = [];
    wordSelected = wordArray[Math.floor(Math.random() * wordArray.length)];
    guessesLeft = 10;
    for (var i = 0; i < wordSelected.length; i++) {
        underscoreWord[i] = "_";
    }

    // underscoreWord.join(' ');
    underscoreWordText.textContent = underscoreWord.toString();
    guessesLeftText.textContent = "Guesses left: " + guessesLeft;
    guessedLettersText.textContent = "Letters guessed: " + guessedLetters;
    console.log(wordSelected);
    
}


newGame();


// Display the word to be guessed in underscores
// underscoreWordText.textContent = underscoreWord.toString();

// This function is run whenever the user presses a key
document.onkeyup = function(event) {


    // Determines which key was pressed
    var userGuess = event.key;

    // Check to see if user input is withing a-z
    if ((65 <= event.which) && (event.which <= 90) ) {

        // Display the letter guessed by user
        // userGuessText.textContent = "You chose: " + userGuess;

        // Check to see if the letter is correct or not
        for (var j = 0; j < wordSelected.length; j++) {
            if (wordSelected.charAt(j) === userGuess) {
                underscoreWord[j] = userGuess;
                updateGuessedLetters = false;
            }
        }
        // console.log("updateGuessedLetter: " + updateGuessedLetters);
        
        // Update the first incorrect guess
        if (updateGuessedLetters == true) {
            if (guessedLetters.length == 0) {
                guessedLetters.push(userGuess);
                guessesLeft--;
            }
            else {
                for (var k = 0; k < guessedLetters.length; k++) {
                    if (userGuess === guessedLetters[k]) {
                        updateGuessedLetters = false;
                        updateLetter = false;
                        break;
                    }
                    else {
                        updateLetter = true;
                    }
                }
                if (updateLetter == true) {
                    guessedLetters.push(userGuess);
                    guessesLeft--;
                }
            }
        }
        updateGuessedLetters = true;
        // console.log("Guessed Letters: " + guessedLetters);
        // underscoreWord.join(' ');
        underscoreWordText.textContent = "Word: " + underscoreWord.toString();
        guessedLettersText.textContent = "Letters guessed: " + guessedLetters.toString();
        guessesLeftText.textContent = "Guesses left: " + guessesLeft;
        console.log("underscoreWord: " + underscoreWord);
        console.log("no spaces: " + underscoreWordJoined);

        
    }

    for (var ii = 0; ii < underscoreWord.length; ii++) {
        if (underscoreWord[ii] === "_") {
            winner = false;
            break;
        }
        else {
            winner = true;
        }
    }
    
    if (winner === true) {
        wins++;
        newGame();
    
    }

    if (guessesLeft === 0) {
        newGame();
    }
    // console.log("wins: " + wins);
    winsText.textContent = "Wins: " + wins;
    // console.log("underscoreWord: " + underscoreWord);


}

// TODO: Create picture for when user wins
// TODO: Possibly include song sample when correct




