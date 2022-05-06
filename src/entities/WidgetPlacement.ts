import { v4 } from "uuid";
import { WidgetLike } from "./interfaces/widgetLike";
import { WidgetPlacementLike } from "./interfaces/widgetPlacementLike";
import { Widget } from './Widget';

export class WidgetPlacement implements WidgetPlacementLike {
    private _id: string;
    private _positionX: number;
    private _positionY: number;
    private _height: number;
    private _width: number;
    private _widget: WidgetLike;

    constructor(positionX: number, positionY: number, height: number, width: number, widget: WidgetLike) {
        this._id = v4();
        this._positionX = positionX;
        this._positionY = positionY;
        this._height = height;
        this._width = width;
        this._widget = widget;
    }
    setXposition = (position_X: number) => {
        this._positionX = position_X;
    };
    getXposition = () => {
        return this._positionX;
    };
    setYposition = (position_Y: number) => {
        this._positionY = position_Y;
    };
    getYposition = () => {
        return this._positionY;
    };
    setWidth = (width: number) => {
        this._width = width;
    };
    getWidth = () => {
        return this._width;
    };
    setHeight = (height: number) => {
        this._height = height;
    };
    getHeight = () => {
        return this._height;
    };
    getId = () => {
        return this._id;
    };
    getWidget = () => {
        return this._widget;
    }

}