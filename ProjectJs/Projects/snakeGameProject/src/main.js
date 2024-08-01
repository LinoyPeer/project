
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Game_1 = require("./classes/Game");
const canvas = document.getElementById("app");
canvas.width = 400;
canvas.height = 400;
const game = new Game_1.Game(canvas, 20);
document.addEventListener("keydown", (event) => {
    game.handleInput(event.key);
});
game.start();
