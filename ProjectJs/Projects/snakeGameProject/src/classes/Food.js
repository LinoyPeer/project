"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Food = void 0;
const helpers_1 = require("../utils/helpers");
class Food {
    constructor(gridSize, snakePosition) {
        this.x = 0;
        this.y = 0;
        this.size = 20;
        this.respawn(gridSize, snakePosition);
    }
    respawn(gridSize, snakePosition) {
        let isOccupied = true;
        while (isOccupied === true) {
            isOccupied = false;
            this.x = (0, helpers_1.getRandomInt)(0, gridSize) * this.size;
            this.y = (0, helpers_1.getRandomInt)(0, gridSize) * this.size;
            snakePosition.forEach((point) => {
                if (point.x === this.x && point.y === this.y) {
                    isOccupied = true;
                }
            });
        }
    }
    draw(canvasContext) {
        canvasContext.fillStyle = "red";
        canvasContext.fillRect(this.x, this.y, this.size, this.size);
    }
}
exports.Food = Food;
