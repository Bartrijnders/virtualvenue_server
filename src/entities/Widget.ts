import { v4 } from "uuid";

export class Widget {
    private _id: string ;
    private _name: string;

    constructor(name: string, id?: string){
        this._id = id ?? v4();
        this._name = name;
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
    
}