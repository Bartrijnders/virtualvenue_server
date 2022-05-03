import { Pool } from "pg";
import { Template } from "../entities/Template";
import { Widget } from "../entities/Widget";
import { WidgetPlacement } from "../entities/WidgetPlacement";
import { daoAble } from "./interfaces/daoAble";


export class TemplateDao implements daoAble<Template> {

    _pool: Pool;
    _widgetPlacementDao : daoAble<WidgetPlacement>;

    constructor(pool: Pool, widgetPlacementDao: daoAble<WidgetPlacement>){
        this._pool = pool;
        this._widgetPlacementDao = widgetPlacementDao;
    }
    save = async (toSave: Template) => {
        try{
            let result = await this._pool.query('INSERT INTO template (id, name) VALUES ($1, $2);', [toSave.id, toSave.name])
        }catch(error: any){
            console.log(error);
        }
    };

    update = async(toUpdate: Template) => {
        try{
            let result = await this._pool.query('UPDATE template SET name = $1 WHERE id = $2', [toUpdate.name, toUpdate.id])
        }catch(error: any){
            console.log(error);
        }
    };
    getAll = async() =>  {
        try{
            let result = await this._pool.query('SELECT * FROM template');
            return result.rows;
        }catch(error: any){
            console.log(error);
        }
    return []
    };
    getById = (id: string) => {
        return new Template('test');
    };

    delete = async (toDelete: Template) => {
        try {
            let result = await this._pool.query('DELETE FROM template WHERE id = $1;', [toDelete.id])
        }
        catch(error: any){
            console.log(error);
        }
    };

}