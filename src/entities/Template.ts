import { v4 } from "uuid";
import { TemplateLike } from "./interfaces/templateLike";
import { WidgetPlacementLike } from "./interfaces/widgetPlacementLike";
import {WidgetPlacement} from './WidgetPlacement';


export class Template implements TemplateLike {
    private _id: string;
    private _name: string;
    private _widgetPlacements: WidgetPlacementLike[];

    constructor(name: string, id?: string, widgetPlacements?: WidgetPlacementLike[]) {
        this._id = id ?? v4();
        this._name = name;
        this._widgetPlacements = widgetPlacements ?? [];
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
    add = (toAdd: WidgetPlacementLike) => {
        this._widgetPlacements.push(toAdd);
    };
    remove = (toRemove: WidgetPlacementLike) => {
        
    };
    getAll = async() => {
        return this._widgetPlacements;
    };
    getById = async(id: string) => {
        return this._widgetPlacements.find(elem => elem.getId() === id)
    };


    
}