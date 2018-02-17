//GLOBAL VARIABLES

    // Hangman word choices
    var wordChoices = ["beagle", "boxer", "dachshund", "corgi", "labrador", "bulldog"];
    var currentWord = "";

    //Number of guesses
    var guessLeft = 12;
    
    //Array to store guessed letters
    var userGuess = []; 

    // Number of losses & wins
    var numberOfLosses = 0;
    var numberOfWins = 0;

// GLOBAL FUNCTIONS

    //Selects a random word from wordChoices array & assigns to currentWord variable
    function pickRandomWord() {
        currentWord = wordChoices[Math.floor(Math.random() * wordChoices.length)];
    }

    // Shows an underscore for every character in the currentWord, adds to <div id="wordChoices"> element in the HTML
    function showCurrentWord() { 
        var wordChoiceDiv = document.getElementById("wordChoices");
        wordChoiceDiv.innerHTML = "<div id=\"wordChoices\"></div>"; // Clears the Div tag for each word
        console.log(currentWord); 
        for (var i = 0; i < currentWord.length; i++) {  // for every letter in the currentWord, type an underscore
            var newSpan = document.createElement("span");
            newSpan.innerHTML= "_ ";
            newSpan.setAttribute("id","letter-"+i);
            wordChoiceDiv.appendChild(newSpan);  
        } 
    }

    // Shows guesses left at the beginning of the game
    function setGuesses () {
        var guessesLeftSpan = document.getElementById("guessesLeft");
        guessesLeftSpan.innerHTML = (guessLeft);
    }

    //changes the photo based on the currentWord
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

    // show guessed letters 
    function showGuesses() {
        for (var l = 0; l < userGuess.length; l++) {
            var Guess = document.getElementById("Guess-" + l);
            Guess.innerHTML = (userGuess[l] + ", ");
        }
    }

    // substract 1 from Guesses Left 
    function substract1 () {
        guessLeft--;
        var guessesLeftSpan = document.getElementById("guessesLeft");
        guessesLeftSpan.innerHTML = (guessLeft);
    }

    // Check if the user lost, if so add to loss count & reset game
    function checkForLoss (){
        if (guessLeft === 0) { //if the user is out of guesses...
            var lossPoints = 0; //check if there are an underscores left
            for (var m = 0; m < currentWord.length; m++) {
                var letter = document.getElementById("letter-"+m).innerHTML;
                if (letter === "_ " ) {
                    lossPoints++; //adds a point for any underscores     
                }
            }
            //if there are any underscores found, then user lost
            if (lossPoints !== 0) { 
                console.log ("you lost!");
                numberOfLosses++;
                var lossSpan = document.getElementById("losses");
                lossSpan.innerHTML = (numberOfLosses);
                resetGame();
            }
        }   
    }

    //Check to see if user won, if so add to win count & reset game
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
    
    // reset game after win or loss | pick new word, reset guess count, clear the userGuess array
    function resetGame() {
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
    }

// ON LOAD COMMANDS

    document.onload = pickRandomWord();
    document.onload = showCurrentWord();
    document.onload = setGuesses ();
    document.onload = document.getElementById("dog-photo").src="assets/images/group.jpg";

// ON KEY CLICK COMMANDS

    document.onkeyup = function(event) {
        if (guessLeft !== 0) { //if user still has guesses left
            var currentLetter = event.key; //Set current letter to key pushed
            if (event.keyCode >= 65 && event.keyCode <= 90) { //if key pushed is a letter
                if (userGuess.length === 0) {  //if user hasn't guessed any letters (AKA array is empty)
                    userGuess.push(currentLetter); // add current letter to array
                    substract1(); //substract 1 from the number of guesses left
                }
                else { //if user HAS guessed letters (AKA userGuess array is not empty)...
                    //Check if new guess has already been guessed before adding it to array
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
            
                //Check if guessed letters (userGuess array) matches any letters in the currentWord
                for (var k = 0; k < currentWord.length; k++) { //For each character in the current word
                    for (var j = 0; j < userGuess.length; j++) { //For each letter in the userGuess array  
                        if (userGuess[j] === currentWord.charAt(k)) { // see if it matches 
                            var CurrentBlank = document.getElementById("letter-"+k);
                            // if UserGuess matches a Character, change corresponding span tag to the letter guessed
                            CurrentBlank.textContent = (userGuess[j]); 
                            
                        } 
                            
                    }
                
                } 
                showGuesses();
                checkForWin();
                checkForLoss();   
            
            }       
        }
    }
