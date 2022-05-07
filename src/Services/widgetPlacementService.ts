import { factoryAble } from "../entities/factory/factoryAble";
import { TemplateLike } from "../entities/interfaces/templateLike";
import { WidgetPlacementLike } from "../entities/interfaces/widgetPlacementLike";
import { WidgetPlacementConstructorType } from "../entities/types/widgetPlacementConstructorType";
import { PlacementDao } from "../Postgres/interfaces/placementDao";
import { PlacemnetServiceAble } from "./interfaces/placementServiceAble";

export class WidgetPlacementService implements PlacemnetServiceAble<WidgetPlacementLike, WidgetPlacementConstructorType, TemplateLike> {

    private _widgetPlacementDao: PlacementDao<WidgetPlacementLike, TemplateLike>
    private _widgetPlacementFactory: factoryAble<WidgetPlacementLike, WidgetPlacementConstructorType>

    constructor(widgetPlacementDao: PlacementDao<WidgetPlacementLike, TemplateLike>, widgetPlacementFactory: factoryAble<WidgetPlacementLike, WidgetPlacementConstructorType>) {
        this._widgetPlacementDao = widgetPlacementDao;
        this._widgetPlacementFactory = widgetPlacementFactory;
    }
    create = (values: WidgetPlacementConstructorType, parent: TemplateLike) => {
        let newWidgetPlacement = this._widgetPlacementFactory.create(values);
        parent.add(newWidgetPlacement);
        this._widgetPlacementDao.save(newWidgetPlacement, parent);
    };

    getByParent = async (parent: TemplateLike) => {
        return await this._widgetPlacementDao.getByParent(parent);
    };

    getBysParent = (parent: TemplateLike) => {
        let result = this._widgetPlacementDao.getByParent(parent);
    };


    update = (toUpdate: WidgetPlacementLike) => {
        this._widgetPlacementDao.update(toUpdate);
    };

    delete = (toDelete: WidgetPlacementLike) => {
        this._widgetPlacementDao.delete(toDelete);
    };

}