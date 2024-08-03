import { Game } from "./game.js";

const canvas = document.getElementById("app");
let directionsDiv = document.querySelector('.containerForArrowDirections');
canvas.style.opacity = '0.4'
directionsDiv.style.opacity = '0.4'


let counterValue = 3;

const countdown = document.getElementById('countdown');

const counter = document.createElement('div');
counter.style.fontSize = '40vw';
counter.innerText = counterValue;
countdown.appendChild(counter);

const timer = setInterval(() => {
    counterValue--;
    if (counterValue > 0) {
        counter.innerText = counterValue;
    } else {
        clearInterval(timer);
        counter.innerText = 'GO!';
        setTimeout(() => {
            countdown.remove();
        }, 1000);
    }
}, 1000);
setTimeout(() => {

    const canvas = document.getElementById("app");
    canvas.width = 300;
    canvas.height = 300;
    canvas.style.opacity = '1'
    directionsDiv.style.opacity = '1'


    const game = new Game(canvas, 20);

    game.start();

    let up = document.querySelector('.up')
    let down = document.querySelector('.down')
    let left = document.querySelector('.left')
    let right = document.querySelector('.right')

    up.addEventListener('click', () => {
        console.log("up");
        game.handleInput("ArrowUp");
    })
    down.addEventListener('click', () => {
        console.log("down");
        game.handleInput("ArrowDown");

    })
    left.addEventListener('click', () => {
        console.log("left");
        game.handleInput("ArrowLeft");

    })
    right.addEventListener('click', () => {
        console.log("right");
        game.handleInput("ArrowRight");

    })

}, 4000);