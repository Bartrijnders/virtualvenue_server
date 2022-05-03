import { Pool } from "pg";
import { Template } from "../entities/Template";
import { Widget } from "../entities/Widget";
import { WidgetPlacement } from "../entities/WidgetPlacement";
import { templateFactory } from "../util/template/templateFactory";
import { TemplateFactoryAble } from "../util/template/templateFactoryAble";
import { TemplateResultTranslater as TemplateResultTranslator } from "../util/template/templateResultTranslator";
import { daoAble } from "./interfaces/daoAble";


export class TemplateDao implements daoAble<Template> {

    private _pool: Pool;
    private _widgetPlacementDao: daoAble<WidgetPlacement>;
    private _templateResultTranslator: TemplateResultTranslator;

    constructor(pool: Pool, widgetPlacementDao: daoAble<WidgetPlacement>, templateResultTranslator: TemplateResultTranslator) {
        this._pool = pool;
        this._widgetPlacementDao = widgetPlacementDao;
        this._templateResultTranslator = templateResultTranslator

    }
    save = async (toSave: Template) => {
        try {
            let result = await this._pool.query('INSERT INTO template (id, name) VALUES ($1, $2);', [toSave.id, toSave.name])
        } catch (error: any) {
            console.log(error);
        }
    };

    update = async (toUpdate: Template) => {
        try {
            let result = await this._pool.query('UPDATE template SET name = $1 WHERE id = $2', [toUpdate.name, toUpdate.id])
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
            let result = await this._pool.query('Select * FORM template WHERE id = $1', [id]);
            return this._templateResultTranslator.translate(result)[0];
        } catch (error) {
            return Promise.reject();
        }
    };

    delete = async (toDelete: Template) => {
        try {
            let result = await this._pool.query('DELETE FROM template WHERE id = $1;', [toDelete.id])
        }
        catch (error: any) {
            console.log(error);
        }
    };

}