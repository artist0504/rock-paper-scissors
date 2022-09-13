/* Imports */

/* State */
let gameState = 'pick';
let pick = ''; // 'rock', 'paper', or 'scissors'
let shoot = ''; // 'rock', 'paper', or 'scissors'
let result = ''; // 'You Win!' or 'You Lose!'

/* Actions */
function loadPage() {
    displayPicks();
    displayResults();
    displayScoreboard();
}

/* Components */

/* Component */
/* Scoreboard */
const winsDisplay = document.getElementById('win-display');
const lossesDisplay = document.getElementById('losses-display');
const drawDisplay = document.getElementById('draw-display');

function displayScoreboard() {
    winsDisplay.textContent = wins;
    lossesDisplay.textContent = losses;
    drawDisplay.textContent = wins - losses;
}

// get DOM
const pickRock = document.getElementById('rock-pick');
const pickPaper = document.getElementById('paper-pick');
const pickScissors = document.getElementById('scissors-pick');

// display
// event listeners

/* Results */
const resultsSection = document.getElementById('results-section');
const resultsSDisplay = document.getElementById('results-display');
const playAgainButton = document.getElementById('play-again-button');
/* Run page load code */
loadPage();
