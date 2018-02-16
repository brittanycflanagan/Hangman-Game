var userGuess = []; 

document.onkeyup = function(event) {
    userGuess.push(event.key); // Add the key that was typed to the userGuess array
    for (var j = 0; j < userGuess.length; j++) { //For each letter in the userGuess array
        if (userGuess[j] === currentWord.charAt(0)) { // see if it matches Character 1 | charAt(0) must match letter-0
            var CurrentBlank = document.getElementById("letter-0");
            CurrentBlank.textContent = (userGuess[j]);  // if UserGuess[j] matches Character 1, change "letter-0"" to the letter guessed
             } 
        
        else {
            var usedLettersDiv = document.getElementById("Guess0"); //Doesn't have to be 0
            usedLettersDiv.innerHTML = (userGuess[j]);
            }
        }
        
}

var userGuess = ["x", "y", "z"]; 

function showGuesses () {
    for (var l = 0; l < userGuess.length; l++) {
        var Guess = document.getElementById("Guess-"+l);
        Guess.innerHTML = (userGuess[l]);
        console.log(userGuess[l]);
    }
}

showGuesses("x")

showGuesses();
function showGuesses () {
    var Guess0 = document.getElementById("Guess-0");
    Guess0.innerHTML = (userGuess[0]);
    var Guess1 = document.getElementById("Guess-1");
    Guess1.innerHTML = (userGuess[1]);
    var Guess2 = document.getElementById("Guess-2");
    Guess2.innerHTML = (userGuess[2]);

    var letter6 = document.getElementById("letter-6").innerHTML;
    var letter7 = document.getElementById("letter-7").innerHTML;
    var letter8 = document.getElementById("letter-8").innerHTML;
    var letter9 = document.getElementById("letter-9").innerHTML;