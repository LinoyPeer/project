"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Game_1 = require("./classes/Game");
var canvas = document.getElementById("app");
canvas.width = 400;
canvas.height = 400;
var game = new Game_1.Game(canvas, 20);
document.addEventListener("keydown", function (event) {
    game.handleInput(event.key);
});
game.start();
