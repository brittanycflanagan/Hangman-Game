
//Create an arry from the user guesses

var userGuess = []; //document.getElementById("userGuess");


document.onkeyup = function(event) {
    userGuess.push(event.key);
    alert(userGuess[0]);
 } 
