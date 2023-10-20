export class Point{
    constructor(public x: number, public y: number) {}

    move(x: number, y: number): void {
        this.x += x;
        this.y += y;
    }
}

export class Rectangle {
    constructor(private _topLeft: Point, private _topRight: Point) {
    }

    move(_NtopLeftX: number, _NtopLeftY: number, _NtopRightX: number, _NtopRightY: number): void {
        this._topLeft.move(_NtopLeftX, _NtopLeftY);
        this._topRight.move(_NtopRightX, _NtopRightY);
    }

    getArea(): number {
        return (this._topRight.x - this._topLeft.x) * (this._topRight.y - this._topLeft.y);
    }
}

const a = new Point(0, 0);
const b = new Point(10, 5);
const prostokat = new Rectangle(a, b);

console.log("Pole: " + prostokat.getArea());

prostokat.move(1, 1, 11, 6);

console.log("Pole2: " + prostokat.getArea());