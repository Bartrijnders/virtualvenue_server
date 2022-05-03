import { v4 } from "uuid";
import {Widget} from './Widget';

export class WidgetPlacement {
    private _id: string;
    private _positionX: number;
    private _positionY: number;
    private _height: number;
    private _width: number;
    private _widget: Widget;

    constructor(positionX: number, positionY: number, height: number, width: number, widget: Widget){
        this._id = v4();
        this._positionX = positionX;
        this._positionY = positionY;
        this._height = height;
        this._width = width;
        this._widget = widget;
    }

    public get id (){
        return this._id;
    }

    public get positionX(): number {
        return this._positionX;
    }

    public set positionX(value: number) {
        this._positionX = value;
    }

    public get positionY(): number {
        return this._positionY;
    }

    public set positionY(value: number) {
        this._positionY = value;
    }

    public get height(): number {
        return this._height;
    }

    public set heigth(newHeight: number) {
        this._height = newHeight;
    }

    public get width(): number{
        return this._width;
    }

    public set width(newWidth: number){
        this._width = this.width;
    }

    public get widget(): Widget {
        return this._widget;
    }
}