// Rock Paper Scissors Game

const gameContainer = document.querySelector('div.circle-container');
const buttonsDiv = document.querySelector('div.choice');

const finalResults = document.querySelector('div.final-results');
const winLose = document.querySelector('p.win-lose');
const bigScore = document.querySelector('p.big-score');

const plSelection = document.querySelectorAll('.selection');
const results = document.querySelector('p.round-results');
const gameInfo = document.querySelector('.game-info');

let userSelection;
let roundNb = 1;
let finalScore = 0;

plSelection.forEach((button) => {
    button.addEventListener('click', () => { 
        userSelection = button.id;
        playRound();
    });
});

function randComputerAnswer() {
    // Create a function to generate a random number between two numbers included
    function randomize(min,max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min); 
    }
    let randNumber = randomize(0,2);
    let gameOptions = ['Rock','Paper','Scissors'];
    return gameOptions[randNumber];
}

function playRound() {
    if (roundNb == 6) {
        roundNb = 1;
        finalScore = 0;
    };

    gameInfo.textContent = ("Round N° " + roundNb);
    let computerSelection = randComputerAnswer();
    let scoreChange;
    switch (true) {
        case ((userSelection.localeCompare("Scissors", 'en', { sensitivity: 'base' }) == 0) 
        && (computerSelection == "Rock")):
        case ((userSelection.localeCompare("Rock", 'en', { sensitivity: 'base' }) == 0) 
        && (computerSelection == "Paper")):
        case ((userSelection.localeCompare("Paper", 'en', { sensitivity: 'base' }) == 0) 
        && (computerSelection == "Scissors")):
            scoreChange = -1;
            break;

        case ((userSelection.localeCompare("Rock", 'en', { sensitivity: 'base' }) == 0) 
        && (computerSelection == "Scissors")):
        case ((userSelection.localeCompare("Paper", 'en', { sensitivity: 'base' }) == 0) 
        && (computerSelection == "Rock")):
        case ((userSelection.localeCompare("Scissors", 'en', { sensitivity: 'base' }) == 0) 
        && (computerSelection == "Paper")):
            scoreChange = 1;
            break;

        case (computerSelection.localeCompare(userSelection, 'en', { sensitivity: 'base' }) == 0):
            scoreChange = 0;
            break;
    }
    
    switch (true) {
        case (scoreChange == 0):
            results.textContent = "Draw";
            break;
        
        case (scoreChange == -1):
            results.textContent = ("You lose ! " + computerSelection + " beats " + userSelection + " !");
            break;
        
        case (scoreChange == 1):
            results.textContent = ("You win ! " + userSelection + " beats " + computerSelection + " !");
            break;
    }

    finalScore += scoreChange;
    roundNb ++;

    if (roundNb == 6) {
        
        finalResults.classList.remove('hidden');
        buttonsDiv.remove();
        results.classList.add('hidden');

        if (finalScore == 0) {
            winLose.textContent = ("It's a tie game.🤷‍♂️");
            bigScore.textContent = finalScore;
        } else if (finalScore >= 1) {
            winLose.textContent = ("You win !🎉");
            bigScore.textContent = finalScore;
        } else {
            winLose.textContent = ("You lose... 😿");
            bigScore.textContent = finalScore;
        }
        
        return;
    }
}

