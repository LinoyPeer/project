import { Game } from "./game.js";

const canvas = document.getElementById("app");
canvas.width = 400;
canvas.height = 400;

const game = new Game(canvas, 20);

document.addEventListener("keydown", (event) => {
    game.handleInput(event.key);
});

game.start();

