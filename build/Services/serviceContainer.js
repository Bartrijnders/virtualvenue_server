"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const templateFactory_1 = require("../entities/factory/templateFactory");
const widgetFactory_1 = require("../entities/factory/widgetFactory");
const widgetPlacementFactory_1 = require("../entities/factory/widgetPlacementFactory");
const Connection_1 = __importDefault(require("../Postgres/Connection"));
const templateDao_1 = require("../Postgres/templateDao");
const widgetDAO_1 = require("../Postgres/widgetDAO");
const widgetPlacementDao_1 = require("../Postgres/widgetPlacementDao");
const templateResultTranslator_1 = require("../util/template/templateResultTranslator");
const templateService_1 = require("./templateService");
const widgetPlacementService_1 = require("./widgetPlacementService");
const widgetService_1 = require("./widgetService");
class ServiceContainer {
    constructor() {
        this._pool = Connection_1.default;
        this._widgetDao = new widgetDAO_1.WidgetDao(this._pool);
        this._WidgetPlacementFactory = new widgetPlacementFactory_1.WidgetPlacementFactory();
        this._widgetPlacementDao = new widgetPlacementDao_1.WidgetPlacementDao(this._pool, this._widgetDao, this._WidgetPlacementFactory);
        this._templateFactory = new templateFactory_1.templateFactory();
        this._widgetFactory = new widgetFactory_1.WidgetFactory();
        this._templateResultTranslator = new templateResultTranslator_1.TemplateResultTranslater(this._templateFactory);
        this._templateDao = new templateDao_1.TemplateDao(this._pool, this._widgetPlacementDao, this._templateResultTranslator);
        this._widgetService = new widgetService_1.WidgetService(this._widgetDao, this._widgetFactory);
        this._widgetPlacementService = new widgetPlacementService_1.WidgetPlacementService(this._widgetPlacementDao, this._WidgetPlacementFactory);
        this._templateService = new templateService_1.TemplateService(this._templateDao, this._templateFactory);
        this.getWidgetService = () => {
            return this._widgetService;
        };
        this.getWidgetPlacementService = () => {
            return this._widgetPlacementService;
        };
        this.getTemplateService = () => {
            return this._templateService;
        };
    }
}
exports.default = new ServiceContainer();
