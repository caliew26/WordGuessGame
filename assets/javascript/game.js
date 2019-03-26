//all declares are at the top of this script
var words = ["mickey mouse", "walt disney", "anaheim", "trains", "princess", "orlando", "tower of terror", "epcot", "magic", "fireworks", "parades", "fantasia"]; ////need to declare the words to use to pay the game
var maxNumGuess = 13; //declare the max number of guesses allowed 
var remainingGuesses = 0; //how many tries the user has left
var currentWordIndex; //index of the currend word in the array
var wordToGuess; //current word randomly chosen to guess
var lettersGuessed = []; //array of letters guessed
var numWins = 0; //keep track of all the wins,
var numLosses = 0; //keep track of all the loses


//all functions for this script are below here

//need to start the game with everything reset
function resetGame() {

    for (var i = 0; i < words[wordToGuess].length; i++) {

    }

    remainingGuesses = maxNumGuess;
    gameStarted = false;


    currentWordIndex = words[Math.floor(Math.random() * words.length)].toLowerCase();  //random word picked to play

    lettersGuessed = [];
    wordToGuess = [];

    //this will select the random word and output an underscore for the length of the word
    for (var i = 0; i <words[currentWordIndex].length; i++); {
        wordToGuess.push("_") ;
    }

    updateDisplay();

}

//docment onkeyup what letter the user guesses and make it lowercase
document.onkeyup = function(event) {
event.key.toLowerCase();
}

//run a loop function reducing the number by 1
for (var i = 0; i < -1; i--) {
    numGuessRemain [i];
}


function myFunction() {
  var x = document.getElementById("alreadyguessed").value;
}


//as the user guesses the letter correctly; reveal them in the correct place


}