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
exports.Template = void 0;
const uuid_1 = require("uuid");
class Template {
    constructor(name, id, widgetPlacements) {
        this.getId = () => {
            return this._id;
        };
        this.getName = () => {
            return this._name;
        };
        this.setName = (newName) => {
            this._name = newName;
        };
        this.add = (toAdd) => {
            this._widgetPlacements.push(toAdd);
        };
        this.remove = (toRemove) => {
        };
        this.getAll = () => __awaiter(this, void 0, void 0, function* () {
            return this._widgetPlacements;
        });
        this.getById = (id) => __awaiter(this, void 0, void 0, function* () {
            return this._widgetPlacements.find(elem => elem.getId() === id);
        });
        this._id = id !== null && id !== void 0 ? id : (0, uuid_1.v4)();
        this._name = name;
        this._widgetPlacements = widgetPlacements !== null && widgetPlacements !== void 0 ? widgetPlacements : [];
    }
}
exports.Template = Template;
