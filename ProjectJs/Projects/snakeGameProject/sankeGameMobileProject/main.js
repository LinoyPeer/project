import { Game } from "./game.js";

const canvas = document.getElementById("app");
canvas.width = 300;
canvas.height = 300;

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

