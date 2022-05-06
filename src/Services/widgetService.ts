import { factoryAble } from "../entities/factory/factoryAble";
import { WidgetLike } from "../entities/interfaces/widgetLike";
import { WidgetConstructorType } from "../entities/types/widgetConstructorType";
import { daoAble } from "../Postgres/interfaces/daoAble";
import { CrudServiceAble } from "./interfaces/crudServiceAble";

export class WidgetService implements CrudServiceAble<WidgetLike, WidgetConstructorType> {

    private _widgetDao: daoAble<WidgetLike>
    private _widgetFactory: factoryAble<WidgetLike, WidgetConstructorType>

    constructor(widgetDao: daoAble<WidgetLike>, widgetFactory: factoryAble<WidgetLike, WidgetConstructorType>){
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

    create = (values: WidgetConstructorType) => {
        let newWidget = this._widgetFactory.create(values);
        this._widgetDao.save(newWidget);
        return newWidget;
    };

}