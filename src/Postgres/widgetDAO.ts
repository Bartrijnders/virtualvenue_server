import { Pool } from "pg";
import { Widget } from "../entities/Widget";
import { daoAble } from "./interfaces/daoAble";
import { databaseDeleteAble } from "./interfaces/databaseDeleteAble";

export class WidgetDao implements daoAble<Widget> {

    _pool: Pool; 

    constructor(pool: Pool){
        this._pool = pool;
    }
    save = async (toSave: Widget) => {
        try{
            let result = await this._pool.query('INSERT INTO widget (id, name) VALUES ($1, $2);', [toSave.id, toSave.name])
        }catch(error: any){
            console.log(error);
        }
    };

    update = async(toUpdate: Widget) => {
        try{
            let result = await this._pool.query('UPDATE widget SET name = $1 WHERE id = $2', [toUpdate.name, toUpdate.id])
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
    getById = (id: string) => {
        return new Widget('test');
    };

    delete = async (toDelete: Widget) => {
        try {
            let result = await this._pool.query('DELETE FROM widget WHERE id = $1;', [toDelete.id])
        }
        catch(error: any){
            console.log(error);
        }
    };


}