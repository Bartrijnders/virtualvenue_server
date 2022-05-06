import { factoryAble } from "../entities/factory/factoryAble";
import { WidgetPlacementLike } from "../entities/interfaces/widgetPlacementLike";
import { WidgetPlacementConstructorType } from "../entities/types/widgetPlacementConstructorType";
import { Widget } from "../entities/Widget";
import { daoAble } from "../Postgres/interfaces/daoAble";
import { CrudServiceAble } from "./interfaces/crudServiceAble";

export class WidgetPlacementService implements CrudServiceAble<WidgetPlacementLike, WidgetPlacementConstructorType> {

    private _widgetPlacementDao: daoAble<WidgetPlacementLike>
    private _widgetPlacementFactory: factoryAble<WidgetPlacementLike, WidgetPlacementConstructorType>

    constructor(widgetPlacementDao: daoAble<WidgetPlacementLike>, widgetPlacementFactory: factoryAble<WidgetPlacementLike, WidgetPlacementConstructorType>){
        this._widgetPlacementDao = widgetPlacementDao;
        this._widgetPlacementFactory = widgetPlacementFactory;
    }
    getAll = () => {
        return this._widgetPlacementDao.getAll();
    };

    getById = (id: string) => {
        return this._widgetPlacementDao.getById(id);
    };

    update = (toUpdate: WidgetPlacementLike) => {
        this._widgetPlacementDao.update(toUpdate);
    };

    delete = (toDelete: WidgetPlacementLike) => {
        this._widgetPlacementDao.delete(toDelete);
    };
    
    create = (values: WidgetPlacementConstructorType) => {
        let newPlacement = this._widgetPlacementFactory.create(values);
        this._widgetPlacementDao.save(newPlacement);
    };
    
}