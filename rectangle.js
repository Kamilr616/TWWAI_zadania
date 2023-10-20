"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = exports.Point = void 0;
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.move = function (x, y) {
        this.x += x;
        this.y += y;
    };
    return Point;
}());
exports.Point = Point;
var Rectangle = /** @class */ (function () {
    function Rectangle(_topLeft, _topRight) {
        this._topLeft = _topLeft;
        this._topRight = _topRight;
    }
    Rectangle.prototype.move = function (_NtopLeftX, _NtopLeftY, _NtopRightX, _NtopRightY) {
        this._topLeft.move(_NtopLeftX, _NtopLeftY);
        this._topRight.move(_NtopRightX, _NtopRightY);
    };
    Rectangle.prototype.getArea = function () {
        return (this._topRight.x - this._topLeft.x) * (this._topRight.y - this._topLeft.y);
    };
    return Rectangle;
}());
exports.Rectangle = Rectangle;
var a = new Point(0, 0);
var b = new Point(10, 5);
var prostokat = new Rectangle(a, b);
console.log("Pole: " + prostokat.getArea());
prostokat.move(1, 1, 11, 6);
console.log("Pole2u: " + prostokat.getArea());
