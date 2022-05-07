"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WidgetPlacement = void 0;
const uuid_1 = require("uuid");
class WidgetPlacement {
    constructor(positionX, positionY, height, width, widget) {
        this.setXposition = (position_X) => {
            this._positionX = position_X;
        };
        this.getXposition = () => {
            return this._positionX;
        };
        this.setYposition = (position_Y) => {
            this._positionY = position_Y;
        };
        this.getYposition = () => {
            return this._positionY;
        };
        this.setWidth = (width) => {
            this._width = width;
        };
        this.getWidth = () => {
            return this._width;
        };
        this.setHeight = (height) => {
            this._height = height;
        };
        this.getHeight = () => {
            return this._height;
        };
        this.getId = () => {
            return this._id;
        };
        this.getWidget = () => {
            return this._widget;
        };
        this._id = (0, uuid_1.v4)();
        this._positionX = positionX;
        this._positionY = positionY;
        this._height = height;
        this._width = width;
        this._widget = widget;
    }
}
exports.WidgetPlacement = WidgetPlacement;
