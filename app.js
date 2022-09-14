/* Imports */

/* State */
let gameState = 'pick';
let pick = ''; // 'rock', 'paper', or 'scissors'
let shoot = ''; // 'rock', 'paper', or 'scissors'
let result = ''; // 'You Win!' or 'You Lose!'

let shots = 0;
let wins = 0;
let losses = 0;

/* Actions */
function loadPage() {
    displayPicks();
    displayResults();
    displayScoreboard();
}

function makePick(userPick) {
    gameState = 'results';
    pick = userPick;
    shoot = getRandomItem(options);
    shots++;

    if (pick === shoot) {
        result = 'win';
        wins++;
    } 
    else {
        result = 'lose';
        losses++;
    }
    else if {
        result = 'draw';
        draw++;
    }

    loadPage();
}

function playAgain() {
    gameState = 'pick';
    loadPage();
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
pickRock.addEventListener('click', () => {
    makePick('rock');
});
pickPaper.addEventListener('click', () => {
    makePick('paper');
});
pickScissors.addEventListener('click', () => {
    makePick('scissors');
});

/* Results */
const resultsSection = document.getElementById('results-section');
const resultsDisplay = document.getElementById('results-display');
const playAgainButton = document.getElementById('play-again-button');

function displayResults() {
    if (gameState === 'results') {
        resultsSection.classList.remove('hidden');
        resultsDisplay.textContent = shoot;
    }
    else {
        resultsSection.classList.add('hidden');
    }
}

playAgainButton.addEventListener('click', () => {
    playAgain();
});

/* Run page load code */
loadPage();
