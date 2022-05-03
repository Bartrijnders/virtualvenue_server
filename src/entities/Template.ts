import { v4 } from "uuid";
import {WidgetPlacement} from './WidgetPlacement';


export class Template {
    private _id: string;
    private _name: string;
    private _widgetPlacements: WidgetPlacement[];

    constructor(name: string, id?: string) {
        this._id = id ?? v4();
        this._name = name;
        this._widgetPlacements = [];
    }

    public get id(): string {
        return this._id;
    }

    public get name() {
        return this._name;
    }

    public set name(newName: string) {
        this._name = newName;
    }

    public addWidgetPlacement(widgetPlacement: WidgetPlacement){
        this._widgetPlacements.push(widgetPlacement);
    }

    
}