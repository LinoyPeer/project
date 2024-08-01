import { getRandomInt } from "../utils/helpers";

export class Food {
    x: number = 0;
    y: number = 0;
    size: number = 20;
    constructor(gridSize: number, snakePosition: { x: number, y: number }[]) {
        this.respawn(gridSize, snakePosition);
    }
    respawn(gridSize: number, snakePosition: { x: number, y: number }[]): void {
        let isOccupied: boolean = true;
        while (isOccupied === true) {
            isOccupied = false;
            this.x = getRandomInt(0, gridSize) * this.size;
            this.y = getRandomInt(0, gridSize) * this.size;
            snakePosition.forEach((point) => {
                if (point.x === this.x && point.y === this.y) {
                    isOccupied = true;
                }
            });
        }
    }
    draw(canvasContext: CanvasRenderingContext2D): void {
        canvasContext.fillStyle = "red";
        canvasContext.fillRect(this.x, this.y, this.size, this.size);
    }

}
