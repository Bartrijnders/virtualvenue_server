import { factoryAble } from "../entities/factory/factoryAble";
import { WidgetLike } from "../entities/interfaces/widgetLike";
import { WidgetType } from "../entities/types/widgetType";
import { daoAble } from "../Postgres/interfaces/daoAble";
import { CrudServiceAble } from "./interfaces/crudServiceAble";

export class WidgetService implements CrudServiceAble<WidgetLike, WidgetType> {

    private _widgetDao: daoAble<WidgetLike>
    private _widgetFactory: factoryAble<WidgetLike, WidgetType>

    constructor(widgetDao: daoAble<WidgetLike>, widgetFactory: factoryAble<WidgetLike, WidgetType>){
        this._widgetDao = widgetDao;
        this._widgetFactory = widgetFactory;
    }

    getAll = async() => {
        return this._widgetDao.getAll();
    };

    getById = async(id: string) => {
        return this._widgetDao.getById(id);
    };

    update = (toUpdate: WidgetLike) => {
        this._widgetDao.update(toUpdate);
    };

    delete = (toDelete: WidgetLike) => {
        this._widgetDao.delete(toDelete);
    };

    create = (values: WidgetType) => {
        let newWidget = this._widgetFactory.create(values);
        this._widgetDao.save(newWidget);
        return newWidget;
    };

}