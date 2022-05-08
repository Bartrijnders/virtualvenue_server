import { factoryAble } from "../entities/factory/factoryAble";
import { TemplateLike } from "../entities/interfaces/templateLike";
import { WidgetPlacementLike } from "../entities/interfaces/widgetPlacementLike";
import { WidgetPlacementType } from "../entities/types/widgetPlacementType";
import { PlacementDao } from "../Postgres/interfaces/placementDao";
import { PlacemnetServiceAble } from "./interfaces/placementServiceAble";

export class WidgetPlacementService implements PlacemnetServiceAble<WidgetPlacementLike, WidgetPlacementType, TemplateLike> {

    private _widgetPlacementDao: PlacementDao<WidgetPlacementLike, TemplateLike>
    private _widgetPlacementFactory: factoryAble<WidgetPlacementLike, WidgetPlacementType>

    constructor(widgetPlacementDao: PlacementDao<WidgetPlacementLike, TemplateLike>, widgetPlacementFactory: factoryAble<WidgetPlacementLike, WidgetPlacementType>) {
        this._widgetPlacementDao = widgetPlacementDao;
        this._widgetPlacementFactory = widgetPlacementFactory;
    }
    getById = async(id: string) => {
        let result = await this._widgetPlacementDao.getById(id);
        return result;
    };
    create = (values: WidgetPlacementType, parent: TemplateLike) => {
        let newWidgetPlacement = this._widgetPlacementFactory.create(values);
        parent.add(newWidgetPlacement);
        this._widgetPlacementDao.save(newWidgetPlacement, parent);
    };

    getByParent = async (parent: TemplateLike) => {
        return await this._widgetPlacementDao.getByParent(parent);
    };

    update = (toUpdate: WidgetPlacementLike) => {
        this._widgetPlacementDao.update(toUpdate);
    };

    delete = (toDelete: WidgetPlacementLike) => {
        this._widgetPlacementDao.delete(toDelete);
    };

}