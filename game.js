// nav - text typing
const navText = document.querySelector('h1');
const text = '"rock, paper, scissors" game';
let indexText = 0;
const time = 200;

function typing() {
    navText.textContent += text[indexText];
    indexText++;
    if (indexText == text.length) clearInterval(indexTyping);
}

const indexTyping = setInterval(typing, time);

// Rock, paper, scissors game:
// Summary of game:
const summary = {
    numbers: 0,
    wins: 0,
    losses: 0,
    draws: 0
}

// Choice player and computer hand
const game = {
    playerHand: '',
    computerHand: ''
}

// Variables
const hands = [...document.querySelectorAll('.select i')];
const startBtn = document.querySelector('button');
const resetBtn = document.querySelector('.reset');
let playerChoice = document.querySelector('[data-summary="your-choice"]');
let computerChoice = document.querySelector('[data-summary="computer-choice"]');
let gamesNumber = document.querySelector('p.numbers span');
let gamesWins = document.querySelector('p.wins span');
let gamesLosses = document.querySelector('p.losses span');
let gamesDraws = document.querySelector('p.draws span');
let whoWin = document.querySelector('[data-summary="winner"]');


// Choice of player hand
function selectPlayerHand() {
    hands.forEach(hand => hand.style.color = '');
    this.style.color = 'green';
    game.playerHand = this.dataset.option;
    console.log(game.playerHand);
}

// Choice computer hand
function selectComputerHand() {
    return hands[Math.floor(Math.random() * 3)].dataset.option;
}

// Who win?
function checkResult(player, computer) {
    if (player == computer) {
        return 'draw';
    } else if ((player == 'paper' && computer == 'rock') || (player == 'rock' && computer == 'scissors') || (player == 'scissors' && computer == 'paper')) {
        return 'win';
    } else {
        return 'loss';
    }
}

function writeResult(player, computer, result) {
    playerChoice.textContent = player;
    computerChoice.textContent = computer;
    gamesNumber.textContent = ++summary.numbers;

    if (result == 'win') {
        gamesWins.textContent = ++summary.wins;
        whoWin.textContent = 'You win!';
        whoWin.style.color = 'green';
    } else if (result == 'loss') {
        gamesLosses.textContent = ++summary.losses;
        whoWin.textContent = 'Computer win!';
        whoWin.style.color = 'red';
    } else {
        gamesDraws.textContent = ++summary.draws;
        whoWin.textContent = 'Draw!';
        whoWin.style.color = 'orange';
    }
}

function endGame() {
    document.querySelector(`[data-option="${game.playerHand}"]`).style.color = '';
    game.playerHand = '';
    game.computerHand = '';
}

function resetResults() {
    gamesNumber.textContent = 0;
    gamesWins.textContent = 0;
    gamesLosses.textContent = 0;
    gamesDraws.textContent = 0;
    whoWin.textContent = '';
}

function startGame() {
    game.computerHand = selectComputerHand();
    const result = checkResult(game.playerHand, game.computerHand);
    console.log(result);
    writeResult(game.playerHand, game.computerHand, result);
    endGame();
}

hands.forEach(hand => hand.addEventListener('click', selectPlayerHand));
startBtn.addEventListener('click', startGame);
resetBtn.addEventListener('click', resetResults);