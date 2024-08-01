"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Snake = void 0;
const types_1 = require("../types");
const helpers_1 = require("../utils/helpers");
class Snake {
    constructor(initialPosition) {
        this.size = 20;
        this.body = [initialPosition];
        this.direction = types_1.Direction.Right;
    }
    move() {
        const newHead = Object.assign({}, this.body[0]);
        switch (this.direction) {
            case types_1.Direction.Right:
                newHead.x += this.size;
                break;
            case types_1.Direction.Left:
                newHead.x -= this.size;
                break;
            case types_1.Direction.Up:
                newHead.y -= this.size;
                break;
            case types_1.Direction.Down:
                newHead.y += this.size;
                break;
        }
        this.body.unshift(newHead);
        this.body.pop();
    }
    grow() {
        const tail = this.body[this.body.length - 1];
        this.body.push({ x: tail.x, y: tail.y });
    }
    turn(newDirection) {
        if (newDirection != (0, helpers_1.getOpositeDirection)(this.direction)) {
            this.direction = newDirection;
        }
    }
    checkCollision(gridSize) {
        const head = this.body[0];
        if (head.x < 0 || head.x >= gridSize || head.y < 0 || head.y >= gridSize) {
            alert('YOU LOSE! TRY AGAIN');
            location.reload();
            return true;
        }
        if (this.body.length > 2) {
            for (let i = 1; i < this.body.length; i++) {
                if (this.body[i].x === head.x && this.body[i].y === head.y) {
                    alert('YOU LOSE! TRY AGAIN');
                    location.reload();
                    return true;
                }
            }
        }
        return false;
    }
    draw(ctx) {
        ctx.fillStyle = "green";
        this.body.forEach((segment) => {
            ctx.fillRect(segment.x, segment.y, this.size, this.size);
        });
    }
}
exports.Snake = Snake;
