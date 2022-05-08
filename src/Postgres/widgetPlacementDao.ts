import { Pool } from "pg";
import { Widget } from "../entities/Widget";
import { daoAble } from "./interfaces/daoAble";
import { WidgetPlacementLike } from "../entities/interfaces/widgetPlacementLike";
import { TemplateLike } from "../entities/interfaces/templateLike";
import { PlacementDao } from "./interfaces/placementDao";
import { factoryAble } from "../entities/factory/factoryAble";
import { WidgetType } from "../entities/types/widgetType";
import { WidgetPlacementType } from "../entities/types/widgetPlacementType";

export class WidgetPlacementDao implements PlacementDao<WidgetPlacementLike, TemplateLike> {
    _pool: Pool;
    _widgetDao: daoAble<Widget>;
    _factory: factoryAble<WidgetPlacementLike, WidgetPlacementType>

    constructor(pool: Pool, widgetDao: daoAble<Widget>, factory: factoryAble<WidgetPlacementLike, WidgetPlacementType>){
        this._pool = pool;
        this._widgetDao = widgetDao;
        this._factory = factory;
    }
    getById =  async(id: string) => {
        try {
            let result = await this._pool.query('SELECT * FROM widget_placement WHERE id = $1', [id])
            return result.rows[0]
        }
        catch (error: any) {
            throw new Error(error);
        }
    };
    
    save = async (toSave: WidgetPlacementLike, parent: TemplateLike) => {
        try{
            let result = await this._pool.query('INSERT INTO widget_placement (id, position_x, position_y, height, width, widget_id, templateid ) VALUES ($1, $2);', 
            [toSave.getId(), toSave.getXposition(), toSave.getYposition(), toSave.getHeight(), toSave.getWidth(), toSave.getWidget().getId, parent.getId()]);
        }catch(error: any){
            throw new Error(error);
        }
    };

    update = async(toUpdate: WidgetPlacementLike) => {
        try{
            let result = await this._pool.query('UPDATE widget_placement SET position_x = $1, position_y = $2, height = $3, width = $4 WHERE id = $5', 
            [toUpdate.getXposition(), toUpdate.getYposition(), toUpdate.getHeight(), toUpdate.getWidth(), toUpdate.getId()])
        }catch(error: any){
            throw new Error(error);
        }
    };

    delete = async (toDelete: WidgetPlacementLike) => {
        try {
            let result = await this._pool.query('DELETE FROM widget_placement WHERE id = $1;', 
            [toDelete.getId()])
        }
        catch(error: any){
            throw new Error(error);
        }
    };

    getByParent = async(parent: TemplateLike) => {
        try {
            let result = await this._pool.query('SELECT * FROM widget_placement WHERE templateid = $1', 
            [parent.getId()])
            return result.rows;
        } catch(error: any){
            throw new Error(error);
        }
        return [];
    };

    

} 