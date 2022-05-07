"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WidgetPlacementService = void 0;
class WidgetPlacementService {
    constructor(widgetPlacementDao, widgetPlacementFactory) {
        this.getAll = () => {
            return this._widgetPlacementDao.getAll();
        };
        this.getById = (id) => {
            return this._widgetPlacementDao.getById(id);
        };
        this.update = (toUpdate) => {
            this._widgetPlacementDao.update(toUpdate);
        };
        this.delete = (toDelete) => {
            this._widgetPlacementDao.delete(toDelete);
        };
        this.create = (values) => {
            let newPlacement = this._widgetPlacementFactory.create(values);
            this._widgetPlacementDao.save(newPlacement);
        };
        this._widgetPlacementDao = widgetPlacementDao;
        this._widgetPlacementFactory = widgetPlacementFactory;
    }
}
exports.WidgetPlacementService = WidgetPlacementService;
