// hangman word choices
var wordChoices = ["beagle", "boxer", "dachshund", "corgi", "labrador", "bulldog"];
var currentWord = "";

//Selects a random word from wordChoices array

function pickRandomWord() {
    currentWord = wordChoices[Math.floor(Math.random() * wordChoices.length)];
}

// Shows a _ for every character in that word in the <div id="wordChoices"> element in the HTML
function showCurrentWord() { 
    var wordChoiceDiv = document.getElementById("wordChoices");
    wordChoiceDiv.innerHTML = "<div id=\"wordChoices\"></div>"; // Clears the Div Tag for next word
    console.log(currentWord); 
    for (var i = 0; i < currentWord.length; i++) {  // for every letter in the "current word", type an underscore
        var newSpan = document.createElement("span");
        newSpan.innerHTML= "_ ";
        newSpan.setAttribute("id","letter-"+i);
        wordChoiceDiv.appendChild(newSpan);  
      } 
}

var guessLeft = 12;

//document.onload = pickRandomWord();
document.onload = pickRandomWord();
document.onload = showCurrentWord();
document.onload = setGuesses ();
document.onload = document.getElementById("dog-photo").src="assets/images/group.jpg";

function changePhoto () {
    if (currentWord === "beagle") {
    document.getElementById("dog-photo").src="assets/images/beagle.jpg"
    }
    if (currentWord === "boxer") {
        document.getElementById("dog-photo").src="assets/images/boxer.jpg"
        }
    if (currentWord === "dachshund") {
        document.getElementById("dog-photo").src="assets/images/dachshund.jpg"
        }
    if (currentWord === "corgi") {
        document.getElementById("dog-photo").src="assets/images/corgi.jpg"
        }
    if (currentWord === "labrador") {
        document.getElementById("dog-photo").src="assets/images/labrador.jpg"
        }
    if (currentWord === "bulldog") {
        document.getElementById("dog-photo").src="assets/images/bulldog.jpg"
        }
}

// user gueses a letter, if letter matches letter in currentWord then replace _ with letter, else, type letter in "letters used" & remove 1 from guess
// Match for loop in other function ("retype the _ everytime kind of"), if B=charater 1 type B, else, type _
// for loop for every charachter in CurrentWord, if "user guess" = Characater 1, show guess, else show _
// Put all userguesses into an array? run through the array to compare for however long the array is?



//Empty Array to store User Guesses

var userGuess = []; 
var foundLetter = 0;


document.onkeyup = function(event) {
    if (guessLeft !== 0) { //if User Guesses is not 0
        var currentLetter = event.key;
        if (event.keyCode >= 65 && event.keyCode <= 90) { //if key pushed is a letter
        if (userGuess.length === 0) {
          userGuess.push(currentLetter);
          substract1();
        }
       else { 
          var count = 0;
        for (var n = 0; n < userGuess.length; n++) {
             if (currentLetter !== userGuess[n]){
              count++;
                if (count === userGuess.length) {
                    userGuess.push(currentLetter);
                    substract1();
            }
           }
       }
        }
       
       // userGuess.push(event.key); // add key pushed to userGuess Array

             
        
    
            
    
    //if (event.key !== userGuess[0]) { //need to make this a loop or do a bunch of ors ||
      //  userGuess.push(event.key); //if the key pushed, does not equal an item in the current array, add it to the array
       // }
     // Add the key that was typed to the userGuess array
    //subtract 1 from number of guesses
    //show letter in Guess element
        for (var k = 0; k < currentWord.length; k++) { //For each character in the current word
            for (var j = 0; j < userGuess.length; j++) { //For each letter in the userGuess array  
                if (userGuess[j] === currentWord.charAt(k)) { // see if it matches 
                    var CurrentBlank = document.getElementById("letter-"+k);
                    CurrentBlank.textContent = (userGuess[j]); // if UserGuess[j] matches a Character, change letter id to the letter guessed
                    //foundLetter++; 
                   // console.log(foundLetter);
                // add to a points category & when the points === currentword.length = win? 
                //if current wordd == Beagle, & if Letter-1 === currentword.1 && Letter-2 === currentword2, etc.
                //(need to set current word to account for different characters lengths)
                //**LOGIC: if letter-1 !== "_ "&& letter-2 !== _ then user wins!
                //**create check for win function
                } 
                    
            }
        
        } 
        showGuesses();
        checkForWin ();
        checkForLoss ();   
        
    }       
}
}


    
// show guessed letters 
function showGuesses() { //only show guesses if does not match? 
    for (var l = 0; l < userGuess.length; l++) {
        var Guess = document.getElementById("Guess-" + l);
        Guess.innerHTML = (userGuess[l] + ", ");
        
    }

}


// substract 1 from the Guesses Left 
//Check to see if user lost, if so add + to losses & reset game


function substract1 () {
    guessLeft--;
    var guessesLeftSpan = document.getElementById("guessesLeft");
    guessesLeftSpan.innerHTML = (guessLeft);
}

function setGuesses () {
    var guessesLeftSpan = document.getElementById("guessesLeft");
    guessesLeftSpan.innerHTML = (guessLeft);
}




// Need to make a "losses" section too
var numberOfLosses = 0;

function checkForLoss (){
    if (guessLeft === 0) {
    var lossPoints = 0;
    for (var m = 0; m < currentWord.length; m++) {
        var letter = document.getElementById("letter-"+m).innerHTML;
        if (letter === "_ " ) {
            lossPoints++; //add a point for each space that is fille         
        }

    }
    if (lossPoints !== 0) { //if points === lenght of characters of the current word then win
        console.log ("you lost!");
        numberOfLosses++;
        var lossSpan = document.getElementById("losses");
        lossSpan.innerHTML = (numberOfLosses);
        resetGame();
    }
}
}

//Check to see if user won, if so add + to wins & reset game
var numberOfWins = 0;

function checkForWin (){
    var points = 0;
    for (var m = 0; m < currentWord.length; m++) {
        var letter = document.getElementById("letter-"+m).innerHTML;
        if (letter !== "_ " ) {
            points++; //add a point for each space that is filled
            if (points === currentWord.length) { //if points === lenght of characters of the current word then win
                console.log ("you win!");
                numberOfWins++;
                var winsSpan = document.getElementById("wins");
                winsSpan.innerHTML = (numberOfWins);
                changePhoto();
                resetGame();
            }
            
        }
    }
}


   

// pick new word, reset guessleft = 12, clear the userGuess array

  function resetGame(){
    guessLeft = 12;
    var guessesReset = document.getElementById("guessesLeft");
    guessesReset.innerHTML = (guessLeft);
    for (var l = 0; l < userGuess.length; l++) { 
        var Guess = document.getElementById("Guess-" + l);
        //userGuess[l] = "";
        Guess.innerHTML = (""); 
    }
    userGuess = [];
    pickRandomWord();
    showCurrentWord();
    // pickRandomWord (); need to reset current word, make an independent function that I can call
  }
    

        //  console.log(letter0);
        
     
        
     // console.log("you win!"); //can remove this later
       

    //}



//for (var l = 0; l < userGuess.length; l++) {
      //  var Guess = document.getElementById("Guess-"+l);
     //   Guess.textContent = (event.key);
     //   var Guess = document.getElementById("Guess-"+j);
     //   Guess.textContent = (userGuess[j]);




// Show Array



//for ever letter guessed, subtract 1 from number of guesses & show letter in element
//else {
  //  var usedLettersDiv = document.getElementById("Guess-"+k); // Doesn't have to be 0
  //  usedLettersDiv.innerHTML = (userGuess[j]);
  //  }

    
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