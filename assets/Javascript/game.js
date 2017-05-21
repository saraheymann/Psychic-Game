var charOptions = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o','p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// var compLetter = charOptions[randomLetter];
var userGuess = '';
var wrongLetters = [];
var numWins = 0;
var numLosses = 0;
var maxGuesses = 9;

document.onkeyup = function(event) {
    // Determines which key was selected. Makes it lowercase
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    var randomLetter = Math.floor(Math.random()* charOptions.length);
    var compLetter = charOptions[randomLetter];
    wrongLetters.push(userGuess);

    if (userGuess === compLetter){
    numWins ++;
    document.getElementById('wins').innerHTML = 'Wins: ' + numWins;
    maxGuesses = 9;
    wrongLetters = [];
	}
	else if(userGuess !== compLetter){
    	maxGuesses --;
    	document.getElementById('userGuessID').innerHTML = 'Your Guesses So Far: ' + wrongLetters;
    	document.getElementById('guessesLeft').innerHTML = 'Guesses Left: ' + maxGuesses;
    }
   if(maxGuesses === 0){
    	numLosses++;
    	document.getElementById('losses').innerHTML = 'Losses: ' + numLosses;
    	maxGuesses = 9;
    	wrongLetters = [];

    }
    	
}