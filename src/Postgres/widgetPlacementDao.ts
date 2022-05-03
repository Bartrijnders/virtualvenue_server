import { Pool } from "pg";
import { Template } from "../entities/Template";
import { Widget } from "../entities/Widget";
import { WidgetPlacement } from "../entities/WidgetPlacement";
import { daoAble } from "./interfaces/daoAble";
import { databaseDeleteAble } from "./interfaces/databaseDeleteAble";
import { getByParentAble } from "./interfaces/databaseGetByParent";
import { DatabaseUpdateAble } from "./interfaces/databseUpdateAble";
import {databaseChildObjectSaveAble} from "./interfaces/databaseChildObjectSaveAble"

export class WidgetPlacementDao implements DatabaseUpdateAble<WidgetPlacement>, databaseDeleteAble<WidgetPlacement>, databaseChildObjectSaveAble<WidgetPlacement, Template>, getByParentAble<WidgetPlacement, Template> {

    _pool: Pool;
    _widgetDao: daoAble<Widget>;

    constructor(pool: Pool, widgetDao: daoAble<Widget>){
        this._pool = pool;
        this._widgetDao = widgetDao;
    }
    
    save = async (toSave: WidgetPlacement, parent: Template) => {
        try{
            let result = await this._pool.query('INSERT INTO widget_placement (id, position_x, position_y, height, width, widget_id, templateid ) VALUES ($1, $2);', 
            [toSave.id, toSave.positionX, toSave.positionY, toSave.height, toSave.width, toSave.widget.id, parent.id]);
        }catch(error: any){
            console.log(error);
        }
    };

    update = async(toUpdate: WidgetPlacement) => {
        try{
            let result = await this._pool.query('UPDATE widget_placement SET position_x = $1, position_y = $2, height = $3, width = $4 WHERE id = $5', 
            [toUpdate.positionX, toUpdate.positionY, toUpdate.height, toUpdate.width, toUpdate.id])
        }catch(error: any){
            console.log(error);
        }
    };

    delete = async (toDelete: WidgetPlacement) => {
        try {
            let result = await this._pool.query('DELETE FROM widget_placement WHERE id = $1;', 
            [toDelete.id])
        }
        catch(error: any){
            console.log(error);
        }
    };

    getByParent = async(parent: Template) => {
        try {
            let result = await this._pool.query('SELECT * FROM widget_placement WHERE templateid = $1', 
            [parent.id])
            return result.rows;
        } catch(error){
            console.log(error);
        }
        return [];
    };

    

} 