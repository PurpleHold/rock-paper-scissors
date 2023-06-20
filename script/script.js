// Rock Paper Scissors Game

// Create a function randComputerAnswer() that randomly assign either "Rock", "Paper" or "Scissors" to a variable 
function randComputerAnswer() {
    // Assign the 3 possible options to an array
    // Use a method to assign the variable computerSelection to a random item of the array
    // Return computerSelection
}

// Create a function getUserAnswer that handles the player's variable creation process
    // Message to the user "Please choose between Rock, Paper, or Scissors."
    // Assign user answer to a variable userSelection
    // Compare the user answer to null
        // If it returns true, ask user to confirm game exit "Do you really want to exit the game ?"
            // If it returns true again, return userSelection

        // Else, do a case-insensitive comparison with "Rock", OR "Paper", OR "Scissors"
            // If it returns false, message to the user : "You have to choose between Rock, Paper, or Scissors. Please try again."
                // Call the function getUserAnswer

            // If it returns true, return userSelection

// Create a function getGameResult() that compares userSelection and computerSelection
    // create a new variable scoreChange to record score 
    // If computerSelection and userSelection got the same (case insensitive) value, then assign 0 to scoreChange
    // If (Computer got Rock && User got Scissors), OR if (Computer got Paper && User Rock), OR if (Computer got Scissors && User Paper) assign -1 to scoreChange
    // Else assign +1 to scoreChange
    // Return scoreChange

// Create a function playRound() that plays one game of Rock Paper Scissors
    // Call randComputerAnswer
    // Call getUserAnswer
    
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
