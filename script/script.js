// Rock Paper Scissors Game


// Create a function randComputerAnswer() that randomly returns either "Rock", "Paper" or "Scissors"
function randComputerAnswer() {
    // Create a function to generate a random number between two numbers included
    function randomize(min,max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min); 
    }
    // Call the randomize function and assign its value to a variable
    let randNumber = randomize(0,2);
    // Assign the 3 possible options to an array
    let gameOptions = ['Rock','Paper','Scissors'];
    // Return a random item of the array
    return gameOptions[randNumber];
}


// Create a function getUserAnswer that handles the player's variable creation process
function getUserAnswer() {
    // Message to the user "Please choose between Rock, Paper, or Scissors."
    let userInput = prompt("Rock, Paper or Scissors ?");
    // Compare the user answer to null; if it returns true, ask user to confirm game exit
    if (userInput === null) {
        if (confirm("Do you really want to exit the game ?")) {
        // If it returns true again, return input
            return userInput;
        }
        // If user cancel exit, call the function back again
        else {
            return getUserAnswer();
        }
    } else {
        // Else, do a case-insensitive comparison with "Rock", OR "Paper", OR "Scissors"
        let isRock = (userInput.localeCompare("Rock", 'en', { sensitivity: 'base' }));
        let isPaper = (userInput.localeCompare("Paper", 'en', { sensitivity: 'base' }));
        let isScissors = (userInput.localeCompare("Scissors", 'en', { sensitivity: 'base' }));

        if ( isRock == 0 || isPaper == 0 || isScissors == 0) {
            // If it returns true, return userInput
            return userInput;
        }
            // If it returns false, ask the user to try again
        else {
            console.log("You have to choose between Rock, Paper, or Scissors. Please try again.");
            return getUserAnswer();
        }
    }    
}


// Create a function playRound() that plays one game of Rock Paper Scissors
function playRound() {
    // Call randComputerAnswer, assign the result to variable computerSelection
    let computerSelection = randComputerAnswer();

    // Call getUserAnswer, assign the result to variable userSelection
    let userSelection = getUserAnswer();

    // Compare userSelection with null, to allow game to end if user confirmed end during input
    if (userSelection === null) {
        return userSelection;
    }
    // create a new variable scoreChange to record user score
    let scoreChange;
    // Assign a new value to scoreChange depending on who wins
    switch (true) {
        case ((userSelection.localeCompare("Scissors", 'en', { sensitivity: 'base' }) == 0) && (computerSelection == "Rock")):
        case ((userSelection.localeCompare("Rock", 'en', { sensitivity: 'base' }) == 0) && (computerSelection == "Paper")):
        case ((userSelection.localeCompare("Paper", 'en', { sensitivity: 'base' }) == 0) && (computerSelection == "Scissors")):
            scoreChange = -1;
            break;

        case ((userSelection.localeCompare("Rock", 'en', { sensitivity: 'base' }) == 0) && (computerSelection == "Scissors")):
        case ((userSelection.localeCompare("Paper", 'en', { sensitivity: 'base' }) == 0) && (computerSelection == "Rock")):
        case ((userSelection.localeCompare("Scissors", 'en', { sensitivity: 'base' }) == 0) && (computerSelection == "Paper")):
            scoreChange = 1;
            break;

        case (computerSelection.localeCompare(userSelection, 'en', { sensitivity: 'base' }) == 0):
            scoreChange = 0;
            break;
    }

    // Show user a draw / lose / win message 
    
    switch (true) {
        case (scoreChange == 0):
            console.log("Draw.");
            break;
        
        case (scoreChange == -1):
            console.log("You lose! " + computerSelection + " beats " + userSelection + " !");
            break;
        
        case (scoreChange == 1):
            console.log("You win! " + userSelection + " beats " + computerSelection + " !");
            break;
    }

    return scoreChange;
}



// Create a function game() that handles the score for a 5-round game
function game() {
    // Create variable finalScore and to keep track of games with 0 as initial value
    let finalScore = 0;
    // Welcome message to the user, mentioning the 5 rounds
    console.log("Here we go for 5-set game of Rock Paper Scissors!");
    // Create a loop that repeats 5 times
    for (let set = 0; set < 5; set++) {
  
        // Display set N°, launch game and assign its return score to a variable
        console.log("Game N°"+(set+1));
        gameScore = playRound();

        // Check if user chose to exit game
        if (gameScore === null) {
            return;
        }
        else {
        // Add the score of each round to the final score variable, show the outcome
        finalScore = (finalScore + gameScore);
        console.log("Your current score is " + finalScore + " !");
        }
      }
      
    // At the end of the 5 games, display player score
    
    if (finalScore == 0) {
        console.log("Your final score is : " + finalScore + " It's a tie game.");
    } else if (finalScore >= 1) {
        console.log("Your final score is : " + finalScore + " You win ! :)");
    } else {
        console.log("Your final score is : " + finalScore + " You lose... :(");
    }

    // Exit function
    return;
}


