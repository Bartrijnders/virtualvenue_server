import { v4 } from "uuid";
import { WidgetLike } from "./interfaces/widgetLike";

export class Widget implements WidgetLike {
    private _id: string ;
    private _name: string;

    constructor(name: string, id?: string){
        this._id = id ?? v4();
        this._name = name;
    }
    getId = () => {
        return this._id;
    };
    getName = () => {
        return this._name;
    };
    setName = (newName: string) => {
        this._name = newName;
    };

    
}