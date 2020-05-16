
// scelta pc della mano
const choices = ["rock", "paper", "scissors"];
// selezio i bottoni delle mani
const buttons = document.querySelectorAll('.btn-circle');
// prendo score
const scoreEl = document.getElementById('score');
// prendo la schermata delle mani
const hands = document.querySelector('.hands');
// prendo il risultato
const showChoice = document.querySelector('.show-choice');
// prendo bottone again
const again = document.querySelector('.again');
// prendo bottone rules
const rules = document.querySelector('.rules');
// prendo bottone close rules
const close = document.querySelector('.close');
// prendo bottone close rules
const rulesBox = document.querySelector('.rules-box');

const mySelect = document.querySelector('.my-select');
const pcSelect = document.querySelector('.pc-select');

const win = document.getElementById('win');
const lose = document.getElementById('lose');
const draw = document.getElementById('draw');

const myImage = document.getElementById('myS');
const pcImage = document.getElementById('pcS');

const wm = document.querySelector('.wm');
const wp = document.querySelector('.wp');


let score = 0;
let userChoice = undefined;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        userChoice = button.getAttribute('data-choice');

        whoWins();
    })
});

function whoWins() {
    const pcChoice = pickRandomChoice();
    const myChoice = userChoice;

    if (myChoice === "paper" && pcChoice === "rock" || myChoice === "scissors" && pcChoice === "paper" || myChoice === "rock" && pcChoice === "scissors") {
        updateScore(1);
        setTimeout(function () {
            win.style.display = "block";
            wm.style.border = "solid 20px #ffdd00";
        }, 3000);

    } else if (myChoice === pcChoice) {
        setTimeout(function () {
            draw.style.display = "block";
        }, 3000);

    } else {
        updateScore(-1);
        setTimeout(function () {
            lose.style.display = "block";
            wp.style.border = "solid 20px #ffdd00";
        }, 3000);

    }

    // mostra risultato e nascondi mani
    myS.src = `./images/icon-${myChoice}.svg`;
    setTimeout(function () {
        pcS.src = `./images/icon-${pcChoice}.svg`;
        pcSelect.classList.add(`${pcChoice}-btn`);
    }, 3000);
    mySelect.classList.add(`${myChoice}-btn`);
    hands.style.display = "none";
    hands.style.display = "none";
    showChoice.style.display = "flex";

}


function updateScore(value) {
    score += value;
    if (score < 0) {
        score = 0;
    }
    scoreEl.innerText = score;
}

function pickRandomChoice() {
    return choices[Math.floor(Math.random() * 3)];
}

rules.addEventListener('click', () => {
    rulesBox.style.display = "block"
});
close.addEventListener('click', () => {
    rulesBox.style.display = "none"
});

again.addEventListener('click', () => {
    hands.style.display = "flex";
    showChoice.style.display = "none";
    draw.style.display = "none";
    win.style.display = "none";
    lose.style.display = "none";
});





// function updateSelection(selectionEl, choice) {
//     selectionEl.classList.
//  }
