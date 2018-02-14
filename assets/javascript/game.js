// Array with word choices, put this in object later?
var wordChoices = ["beagle", "poodle", "dachshund", "corgi"];

//Selects a random word from wordChoices array, shows a _ for every character in that word in the <div id="wordChoices"> element in the HTML
var currentWord = wordChoices[Math.floor(Math.random() * wordChoices.length)];

function showCurrentWord() { 
    var wordChoiceDiv = document.getElementById("wordChoices"); 
    wordChoiceDiv.innerHTML = currentWord; // This is showing the actual word, remove this later
    for (var i = 0; i < currentWord.length; i++) {        // for every letter in the "current word", type a "_"
        var newSpan = document.createElement("span");
        newSpan.innerHTML= "_ ";
        newSpan.setAttribute("id","letter-"+i);
        wordChoiceDiv.appendChild(newSpan);  
      } 
}

showCurrentWord();
 
// create an array based on the length of the word filled with underscores, and then replacing the _ in the array

// user gueses a letter, if letter matches letter in currentWord then replace _ with letter, else, type letter in "letters used" & remove 1 from guess
// Match for loop in other function ("retype the _ everytime kind of"), if B=charater 1 type B, else, type _
// for loop for every charachter in CurrentWord, if "user guess" = Characater 1, show guess, else show _
// Put all userguesses into an array? run through the array to compare for however long the array is?

//Empty Array to store User Guesses

var userGuess = []; 

document.onkeyup = function(event) {
    userGuess.push(event.key); // Add the key that was typed to the userGuess array
    
    if (userGuess[0] === currentWord.charAt(0)) { // Need to make this a for loop, currently 
        var CurrentBlank = document.getElementById("letter-0");
        CurrentBlank.textContent = (userGuess[0]);  // if UserGuess[i] === Charat(), change "element1" to UserGuess[i]
        //May need to assign specific ids instead of adding spans
    } 
    else {
    alert("you suck");
    }
}

console.log

    
    
    //for (var j = 0; j < userGuess.length; j++) {        // for every letter in the "current word", type a "_"
        //var newSpan = document.createElement("span");
       // if (userGuess[j] = currentWord.charAt(0)) {
            //console.log(userGuess[j]);
            // newSpan.innerHTML= "userGuess[j]";
            // wordChoiceDiv.appendChild(newSpan);
     //   }  else {
           // console.log("nope!");
            // newSpan.innerHTML= "_ ";
            // wordChoiceDiv.appendChild(newSpan);  
       // } 
     // }

   // } 