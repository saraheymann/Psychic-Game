var charOptions = ['abcdefghijklmnopqrstuvwxyz'];
var charArray = charOptions.split('');
var compLetter = '';
var charArray = [];
var wins = '';
var losses = '';
var userGuess = 9;

// picking the computer's letter
function pickCharOptions{
	compLetter = charArray[Math.floor(Math.random() * charArray.length)];
}


// funcion hideCompWord(){

// 	for (var i = 0; i < charOptions.length; i++) {
// 		charOptions[i]
// 	}
// 	}
// }

// function gameStart(){
// 	// computer picks a letter
// 	// user guesses when they press a key
// 	// displays userGuess
// 	// 
// }




// gameStart();
// document.onkeyup = function(event){
// 	userGuess = String.fromCharCode(event.keyCode).toLowerCase();
// 	if(userGuess.match(/[a-zA-Z]/)){
//         if (isNewGame()) {
//             gameStart();
//         } else if (isPlaying()) {
//             showPlay();
//             if (wonGame()) {
//                 showWin();
//                 reset();
//             } else if (gameOver()) {
//                 showLoss();
//                 reset();
//             }
//         }
//     }
// }
// }