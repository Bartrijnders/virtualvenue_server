import { Pool } from "pg";
import { WidgetLike } from "../entities/interfaces/widgetLike";
import { Widget } from "../entities/Widget";
import { daoAble } from "./interfaces/daoAble";
import { DatabaseDeleteAble } from "./interfaces/databaseDeleteAble";

export class WidgetDao implements daoAble<WidgetLike> {

    _pool: Pool; 

    constructor(pool: Pool){
        this._pool = pool;
    }
    save = async (toSave: WidgetLike) => {
        try{
            let result = await this._pool.query('INSERT INTO widget (id, name) VALUES ($1, $2);', [toSave.getId(), toSave.getName()])
        }catch(error: any){
            console.log(error);
        }
    };

    update = async(toUpdate: WidgetLike) => {
        try{
            let result = await this._pool.query('UPDATE widget SET name = $1 WHERE id = $2', [toUpdate.getName(), toUpdate.getId()])
        }catch(error: any){
            console.log(error);
        }
    };
    getAll = async() =>  {
        try{
            let result = await this._pool.query('SELECT * FROM widget');
            return result.rows;
        }catch(error: any){
            console.log(error);
        }
    return []
    };
    getById = async(id: string) => {
        return new Widget('test');
    };

    delete = async (toDelete: WidgetLike) => {
        try {
            let result = await this._pool.query('DELETE FROM widget WHERE id = $1;', [toDelete.getId()])
        }
        catch(error: any){
            console.log(error);
        }
    };


}