"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomInt = getRandomInt;
exports.getOpositeDirection = getOpositeDirection;
// פונקציה להגרלת מספר שלם בין בני ערכים
var types_1 = require("../types");
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
function getOpositeDirection(dir) {
    switch (dir) {
        case types_1.Direction.Right:
            return types_1.Direction.Left;
        case types_1.Direction.Left:
            return types_1.Direction.Right;
        case types_1.Direction.Up:
            return types_1.Direction.Down;
        case types_1.Direction.Down:
            return types_1.Direction.Up;
        default:
            return types_1.Direction.Right;
    }
}
// checkCollision(gridSize: number):boolean{
//     return false;
// }
