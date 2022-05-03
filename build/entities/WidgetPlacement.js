"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WidgetPlacement = void 0;
const uuid_1 = require("uuid");
class WidgetPlacement {
    constructor(positionX, positionY, height, width, widget) {
        this._id = (0, uuid_1.v4)();
        this._positionX = positionX;
        this._positionY = positionY;
        this._height = height;
        this._width = width;
        this._widget = widget;
    }
    get id() {
        return this._id;
    }
    get positionX() {
        return this._positionX;
    }
    set positionX(value) {
        this._positionX = value;
    }
    get positionY() {
        return this._positionY;
    }
    set positionY(value) {
        this._positionY = value;
    }
    get height() {
        return this._height;
    }
    set heigth(newHeight) {
        this._height = newHeight;
    }
    get width() {
        return this._width;
    }
    set width(newWidth) {
        this._width = this.width;
    }
    get widget() {
        return this._widget;
    }
}
exports.WidgetPlacement = WidgetPlacement;
