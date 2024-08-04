const startGame = document.querySelector('.continerStartOfExercise');
const exercisesboard = document.querySelector('.forme');
const endGame = document.querySelector('.continerEndOfExercise');

exercisesboard.style.display = 'none';
endGame.style.display = 'none';
startGame.classList.add('show');
const startGameBtn = document.querySelector('.startGameBtn');
startGameBtn.addEventListener('click', () => {
    startGame.classList.add('hide');
    startGame.style.display = 'none';
    countdown.style.display = 'block';
    exercisesboard.style.display = 'block';
});

// const objData = {
//     name: playerName,
//     // score: numberOfCorrectAnswers,
//     // Gametime: timeOfGame,
//     // exerciseTime: exerciseTime,
// };
const playerName = document.getElementById('playerName');

const addName = (e) => {
    console.log(e.target.value);
};

playerName.addEventListener('change', addName);
startGameBtn.addEventListener('click', () => {
    const nameValue = playerName.value;
    console.log(nameValue);

});


let check = false;
const num1 = document.querySelector('#num1');
num1.value = Math.floor((Math.random() * 100) + 1);
const num2 = document.querySelector('#num2');
num2.value = Math.floor((Math.random() * 100) + 1);
let result = document.getElementById('result');

const btn1 = document.getElementById('btn1').addEventListener('click', () => {
    let sum;
    sum = Number(num1.value) + Number(num2.value);
    let block = document.querySelector('#block');
    if (Number(result.value) === sum) {
        check = true;
        let answer = document.getElementById('answer');
        answer.innerText = 'Good! You can continue to the next one :)';
        block.disabled = false;
    } else {
        check = false;
        answer.innerText = 'Wrong Answer :( You cannot skip the next question until you will succeed!';
        block.disabled = true;
    }
});

function btn2() {
    num1.value = Math.floor((Math.random() * 100) + 1);
    num2.value = Math.floor((Math.random() * 100) + 1);
    result.value = "";
    answer.innerText = "";
}
btn2();

const countdown = document.getElementById('countdown');
const counter = document.createElement('div');
let counterValue = 13;
counter.innerText = counterValue;
countdown.appendChild(counter);

endGame.style.display = 'none';
countdown.style.display = 'block';

const timer = setInterval(() => {
    counterValue--;
    if (counterValue < 10) {
        counter.classList.add('blink-red');
    }
    if (counterValue > 0) {
        counter.innerText = counterValue;
    } else {
        clearInterval(timer);
        counter.innerText = 'Time Is UP!';
        endGame.style.display = 'block';
        setTimeout(() => {
            endGame.classList.add('show');
        }, 10);
        exercisesboard.style.display = 'none';
        countdown.style.display = 'none';
    }
}, 1000);
