// Rock Paper Scissors Game


// Create a function randComputerAnswer() that randomly returns either "Rock", "Paper" or "Scissors"
function randComputerAnswer() {
    // Create a function to generate a random number between two numbers included
    function randomize(min,max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min); 
    }
    // Call the function and assign its value to a variable
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
    // Compare the user answer to null; if it returns true, ask user to confirm game exit "Do you really want to exit the game ?"
    if (userInput === null) {
        if (confirm("Do you really want to exit the game ?")) {
        // If it returns true again, return input
            return userInput;
        }
        // If user cancel exit, call the function back again
        else {
            getUserAnswer();
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
            getUserAnswer();
        }
    }    
}

// Create a function getGameResult() that compares userSelection and computerSelection
    // create a new variable scoreChange to record score 
    // If computerSelection and userSelection got the same (case insensitive) value, then assign 0 to scoreChange
    // If (Computer got Rock && User got Scissors), OR if (Computer got Paper && User Rock), OR if (Computer got Scissors && User Paper) assign -1 to scoreChange
    // Else assign +1 to scoreChange
    // Return scoreChange

// Create a function playRound() that plays one game of Rock Paper Scissors
    // Call randComputerAnswer, assign the result to variable computerSelection
    // Call getUserAnswer, assign the result to variable userSelection
    
    // Compare userSelection with null
        // If it returns true, return userSelection

        // Else, call getGameResult()
            // If scoreChange == 0, return "Draw."

            // If scoreChange == -1, return "You lose! " + computerSelection + " beats " + userSelection + " !"

            // Else, return "You win! " + userSelection + " beats " + computerSelection + " !"


// Create a function game() that handles the score for a 5-round game
    // Create variable finalScore and to keep track of games with 0 as initial value
    // Welcome message to the user, mentioning the 5 rounds
    // Create a loop that repeats 5 times with init value at 1
        // Call playRound()
        // Check if user wants to end game (userSelection == null), if it's true, exit loop or function ?
        // Else, add scoreChange to finalScore

    // Check if user wants to end game (userSelection == null), if it's true, exit loop or function ?
    // At the end of the 5 games, display player score
        // If finalScore == 0 message to the user : "Your final score is : " + finalScore + " It's a tie game."
        // If finalScore >= 1 message to the user : "Your final score is : " + finalScore + " You win ! :)"
        // If finalScore < 0 message to the user : "Your final score is : " + finalScore + " You lose... :("

    // Exit function
