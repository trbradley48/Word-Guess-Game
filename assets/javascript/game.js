

// Declaration of variables
var wordArray = ["metallica", "black sabbath", "guns n roses", "ac dc", "boston", "iron maiden"];
var wordSelected;
var underscoreWord = [];
var underscoreWordJoined = underscoreWord.join(' ');
var guessedLetters = [];
var updateGuessedLetters = true;
var guessesLeft = 10;
var updateLetter = false;
var wins = 0;
var winner = false;
var backgroundMusic;

// Declaration of text varialbes in HTML
var directionsText = document.getElementById("directions-text");
var winsText = document.getElementById("wins-text");
var userGuessText = document.getElementById("userGuess-text");
var underscoreWordText = document.getElementById("underscoreWord-text");
var guessedLettersText = document.getElementById("guessedLetters-text");
var guessesLeftText = document.getElementById("guessesLeft-text");

// Declaration of sound variables
var metallicaSound = document.getElementById("metallica-sound");
var metallicaSound = document.getElementById("black-sabbath-sound");
var metallicaSound = document.getElementById("guns-n-roses-sound");
var metallicaSound = document.getElementById("ac-dc-sound");
var metallicaSound = document.getElementById("boston-sound");
var metallicaSound = document.getElementById("iron-maiden-sound");

// Display letters guessed
guessedLettersText.textContent = "Letters guessed: " + guessedLetters.toString();


// Create new game
function newGame() {
    underscoreWord = [];
    guessedLetters = [];
    wordSelected = wordArray[Math.floor(Math.random() * wordArray.length)];
    guessesLeft = 10;
    for (var i = 0; i < wordSelected.length; i++) {
        if(wordSelected[i] === " ") {
            underscoreWord[i] = "-";
        }
        else {
            underscoreWord[i] = "_";
        }
    }
    underscoreWordText.textContent = "Word: " + underscoreWord.toString();
    guessesLeftText.textContent = "Guesses left: " + guessesLeft;
    guessedLettersText.textContent = "Letters guessed: " + guessedLetters;
    console.log(wordSelected);
    
}

// Create new game
newGame();


// This function is run whenever the user presses a key
document.onkeyup = function(event) {


    // Determines which key was pressed
    var userGuess = event.key;

    // Check to see if user input is withing a-z
    if ((65 <= event.which) && (event.which <= 90) ) {


        // Check to see if the letter is correct or not
        for (var j = 0; j < wordSelected.length; j++) {
            if (wordSelected.charAt(j) === userGuess) {
                underscoreWord[j] = userGuess;
                updateGuessedLetters = false;
            }
        }
        
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
        underscoreWordText.textContent = "Word: " + underscoreWord.toString();
        guessedLettersText.textContent = "Letters guessed: " + guessedLetters.toString();
        guessesLeftText.textContent = "Guesses left: " + guessesLeft;
        console.log("underscoreWord: " + underscoreWord);

        
    }

    // check if user won
    for (var ii = 0; ii < underscoreWord.length; ii++) {
        if (underscoreWord[ii] === "_") {
            winner = false;
            break;
        }
        else {
            winner = true;
        }
    }
    
    // play sound and increase win by 1 when correctly guessing word
    if (winner === true) {
        wins++;
        if (backgroundMusic != null) {
            backgroundMusic.pause();
        }
        if (wordSelected === "metallica") {
            backgroundMusic = document.getElementById("metallicaSound");
        }
        else if (wordSelected === "black sabbath") {
            backgroundMusic = document.getElementById("blacksabbathSound");
        }
        else if (wordSelected === "guns n roses") {
            backgroundMusic = document.getElementById("gunsnrosesSound");
        }
        else if (wordSelected === "ac dc") {
            backgroundMusic = document.getElementById("acdcSound");
        }
        else if (wordSelected === "boston") {
            backgroundMusic = document.getElementById("bostonSound");
        }
        else if (wordSelected === "iron maiden") {
            backgroundMusic = document.getElementById("ironmaidenSound");
        }
        
        backgroundMusic.play();
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





