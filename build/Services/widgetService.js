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
exports.WidgetService = void 0;
class WidgetService {
    constructor(widgetDao, widgetFactory) {
        this.getAll = () => __awaiter(this, void 0, void 0, function* () {
            return this._widgetDao.getAll();
        });
        this.getById = (id) => __awaiter(this, void 0, void 0, function* () {
            return this._widgetDao.getById(id);
        });
        this.update = (toUpdate) => {
            this._widgetDao.update(toUpdate);
        };
        this.delete = (toDelete) => {
            this._widgetDao.delete(toDelete);
        };
        this.create = (values) => {
            let newWidget = this._widgetFactory.create(values);
            this._widgetDao.save(newWidget);
            return newWidget;
        };
        this._widgetDao = widgetDao;
        this._widgetFactory = widgetFactory;
    }
}
exports.WidgetService = WidgetService;
