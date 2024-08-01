"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Food = void 0;
var helpers_1 = require("../utils/helpers");
var Food = /** @class */ (function () {
    function Food(grideSize, snakePositions) {
        this.x = 0;
        this.y = 0;
        this.size = 20;
        this.respawn(grideSize, snakePositions);
    }
    Food.prototype.respawn = function (grideSize, snakePositions) {
        var _this = this;
        var isOccupied = true;
        while (isOccupied === true) {
            this.x = (0, helpers_1.getRandomInt)(0, grideSize) * this.size;
            this.y = (0, helpers_1.getRandomInt)(0, grideSize) * this.size;
            isOccupied = false;
            snakePositions.forEach(function (point) {
                if (point.x === _this.x && point.y === _this.y) {
                    isOccupied = true;
                }
            });
        }
    };
    Food.prototype.draw = function (canvasContext) {
        canvasContext.fillStyle = "red";
        canvasContext.fillRect(this.x, this.y, this.size, this.size);
    };
    return Food;
}());
exports.Food = Food;
