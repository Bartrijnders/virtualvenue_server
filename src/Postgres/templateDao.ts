import { Pool } from "pg";
import { TemplateLike } from "../entities/interfaces/templateLike";
import { WidgetPlacementLike } from "../entities/interfaces/widgetPlacementLike";
import { Template } from "../entities/Template";
import { WidgetPlacement } from "../entities/WidgetPlacement";
import { TemplateResultTranslater as TemplateResultTranslator } from "../util/template/templateResultTranslator";
import { daoAble } from "./interfaces/daoAble";
import { PlacementDao } from "./interfaces/placementDao";

export class TemplateDao implements daoAble<Template> {

    private _pool: Pool;
    private _widgetPlacementDao: PlacementDao<WidgetPlacementLike, TemplateLike>;
    private _templateResultTranslator: TemplateResultTranslator;

    constructor(pool: Pool, widgetPlacementDao: PlacementDao<WidgetPlacementLike, TemplateLike>, templateResultTranslator: TemplateResultTranslator) {
        this._pool = pool;
        this._widgetPlacementDao = widgetPlacementDao;
        this._templateResultTranslator = templateResultTranslator

    }
    save = async (toSave: TemplateLike) => {
        try {
            let result = await this._pool.query('INSERT INTO template (id, name) VALUES ($1, $2);', [toSave.getId(), toSave.getName()])
            return result;
        } catch (error: any) {
            console.log(error);
        }
    };

    update = async (toUpdate: TemplateLike) => {
        try {
            let result = await this._pool.query('UPDATE template SET name = $1 WHERE id = $2', [toUpdate.getName(), toUpdate.getId()])
        } catch (error: any) {
            console.log(error);
        }
    };
    getAll = async () => {
        try {
            let result = await this._pool.query('SELECT * FROM template');
            return this._templateResultTranslator.translate(result);
        }
        catch (error: any) {
            console.log(error);
        }
        return []
    };

    getById = async (id: string) => {
        try {
            let result = await this._pool.query('Select * FROM template WHERE id = $1', [id]);
            console.log(result);
            return this._templateResultTranslator.translate(result)[0]
        } catch (error) {
            console.log(error);
            return Promise.reject();
        }
    };

    delete = async (toDelete: TemplateLike) => {
        try {
            let result = await this._pool.query('DELETE FROM template WHERE id = $1;', [toDelete.getId])
        }
        catch (error: any) {
            console.log(error);
        }
    };

}