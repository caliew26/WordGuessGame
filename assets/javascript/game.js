//random word pulled from list I created
var words = ["mickey mouse", "walt disney", "anaheim", "trains", "princess", "orlando", "tower of terror", "epcot", "magic", "fireworks", "parades", "fantasia"];

//max number of guesses allowed
//will need to keep track of them; reduce (i--) by 1 everytime a letter is guessed
var numGuess = 13;

var numGuessRemain = 0;

//list of all guessed letters
var lettersGuessed = [];

//an underscore listed for the length of each word as it is generated
var ansWordArray = [];

//keep track of all the wins, user guessed the words (would be within the alloted number of guesses)
var numWins = 0;

//keep track of all the loses, user didn't get the word in the number of allowed guesses -->
var numLosses = 0;

//docment onkeyup what letter the user guesses and make it lowercase
document.onkeyup = event.key.toLowerCase();




//as the user guesses the letter correctly; reveal them in the correct place
//
