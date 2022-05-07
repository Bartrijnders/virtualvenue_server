import { templateFactory } from "../entities/factory/templateFactory";
import { WidgetFactory } from "../entities/factory/widgetFactory";
import { WidgetPlacementFactory } from "../entities/factory/widgetPlacementFactory";
import POOL from "../Postgres/Connection";
import { TemplateDao } from "../Postgres/templateDao";
import { WidgetDao } from "../Postgres/widgetDAO";
import { WidgetPlacementDao } from "../Postgres/widgetPlacementDao";
import { TemplateResultTranslater } from "../util/template/templateResultTranslator";
import { TemplateService } from "./templateService";
import { WidgetPlacementService } from "./widgetPlacementService";
import { WidgetService } from "./widgetService";

export class ServiceContainer {
    private _pool = POOL;
    private _widgetDao = new WidgetDao(this._pool);
    private _widgetPlacementDao = new WidgetPlacementDao(this._pool, this._widgetDao);
    private _templateFactory = new templateFactory();
    private _widgetFactory = new WidgetFactory();
    private _WidgetPlacementFactory = new WidgetPlacementFactory();
    private _templateResultTranslator = new TemplateResultTranslater(this._templateFactory);
    private _templateDao = new TemplateDao(this._pool, this._widgetPlacementDao, this._templateResultTranslator);
    private _widgetService = new WidgetService(this._widgetDao, this._widgetFactory);
    private _widgetPlacementService = new WidgetPlacementService(this._widgetPlacementDao, this._WidgetPlacementFactory);
    private _templateService = new TemplateService(this._templateDao, this._templateFactory);

    getWidgetService = () => {
        return this._widgetService;
    }

    getWidgetPlacementService = () => {
        return this._widgetPlacementService;
    }

    getTemplateService = () => {
        return this._templateService;
    }
}