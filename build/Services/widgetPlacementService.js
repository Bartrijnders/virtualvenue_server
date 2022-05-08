"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WidgetPlacementService = void 0;
class WidgetPlacementService {
    constructor(widgetPlacementDao, widgetPlacementFactory) {
        this.getById = (id) => __awaiter(this, void 0, void 0, function* () {
            let result = yield this._widgetPlacementDao.getById(id);
            return result;
        });
        this.create = (values, parent) => {
            let newWidgetPlacement = this._widgetPlacementFactory.create(values);
            parent.add(newWidgetPlacement);
            this._widgetPlacementDao.save(newWidgetPlacement, parent);
        };
        this.getByParent = (parent) => __awaiter(this, void 0, void 0, function* () {
            return yield this._widgetPlacementDao.getByParent(parent);
        });
        this.update = (toUpdate) => {
            this._widgetPlacementDao.update(toUpdate);
        };
        this.delete = (toDelete) => {
            this._widgetPlacementDao.delete(toDelete);
        };
        this._widgetPlacementDao = widgetPlacementDao;
        this._widgetPlacementFactory = widgetPlacementFactory;
    }
}
exports.WidgetPlacementService = WidgetPlacementService;
