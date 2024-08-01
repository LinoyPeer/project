"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Snake = void 0;
var types_1 = require("../types");
var helpers_1 = require("../utils/helpers");
var Snake = /** @class */ (function () {
    function Snake(initialPosition) {
        this.size = 20;
        this.body = [initialPosition];
        this.direction = types_1.Direction.Right;
    }
    Snake.prototype.move = function () {
        var newHead = __assign({}, this.body[0]);
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
    };
    Snake.prototype.grow = function () {
        var tail = this.body[this.body.length - 1];
        this.body.push({ x: tail.x, y: tail.y });
    };
    Snake.prototype.turn = function (newDirection) {
        if (newDirection != (0, helpers_1.getOpositeDirection)(this.direction)) {
            this.direction = newDirection;
        }
    };
    Snake.prototype.checkCollision = function (gridSize) {
        var head = this.body[0];
        if (head.x < 0 || head.x >= gridSize || head.y < 0 || head.y >= gridSize) {
            return true;
        }
        if (this.body.length > 2) {
            for (var i = 1; i < this.body.length; i++) {
                if (this.body[i].x === head.x && this.body[i].y === head.y) {
                    return true;
                }
            }
        }
        return false;
    };
    Snake.prototype.draw = function (ctx) {
        var _this = this;
        ctx.fillStyle = "green";
        this.body.forEach(function (segment) {
            ctx.fillRect(segment.x, segment.y, _this.size, _this.size);
        });
    };
    return Snake;
}());
exports.Snake = Snake;
