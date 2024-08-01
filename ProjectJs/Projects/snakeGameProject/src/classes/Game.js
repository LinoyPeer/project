"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
var types_1 = require("../types");
var Food_1 = require("./Food");
var Snake_1 = require("./Snake");
var Game = /** @class */ (function () {
    function Game(canvas, gridSize) {
        if (gridSize === void 0) { gridSize = 20; }
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.gridSize = gridSize;
        this.gameOver = false;
        this.score = 0;
        this.intervalId = null;
        var middle = Math.pow(this.gridSize, 2) / 2;
        this.snake = new Snake_1.Snake({ x: middle, y: middle });
        this.food = new Food_1.Food(gridSize, this.snake.body);
    }
    Game.prototype.start = function () {
        var _this = this;
        this.intervalId = setInterval(function () {
            _this.update();
        }, 100); // Update every 100 milliseconds
    };
    Game.prototype.update = function () {
        if (this.gameOver) {
            if (this.intervalId)
                clearInterval(this.intervalId);
            console.log("Game Over!");
            return;
        }
        this.snake.move();
        // Check if food is eaten
        if (this.snake.body[0].x === this.food.x &&
            this.snake.body[0].y === this.food.y) {
            this.snake.grow();
            this.food.respawn(this.gridSize, this.snake.body);
            this.score += 10;
        }
        // Check for game over
        if (this.snake.checkCollision(this.gridSize * this.gridSize)) {
            this.gameOver = true;
        }
        this.draw();
    };
    Game.prototype.draw = function () {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.food.draw(this.ctx);
        this.snake.draw(this.ctx);
    };
    Game.prototype.handleInput = function (key) {
        console.log(key);
        switch (key) {
            case "ArrowUp":
                this.snake.turn(types_1.Direction.Up);
                break;
            case "ArrowDown":
                this.snake.turn(types_1.Direction.Down);
                break;
            case "ArrowLeft":
                this.snake.turn(types_1.Direction.Left);
                break;
            case "ArrowRight":
                this.snake.turn(types_1.Direction.Right);
                break;
            case "Enter":
                this.reset();
                break;
        }
    };
    Game.prototype.reset = function () {
        this.gameOver = false;
        this.score = 0;
        this.snake = new Snake_1.Snake({ x: this.gridSize, y: this.gridSize });
        this.food.respawn(this.gridSize, this.snake.body);
        this.start();
    };
    return Game;
}());
exports.Game = Game;
