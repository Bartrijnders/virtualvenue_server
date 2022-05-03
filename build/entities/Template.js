"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Template = void 0;
const uuid_1 = require("uuid");
class Template {
    constructor(name, id) {
        this._id = id !== null && id !== void 0 ? id : (0, uuid_1.v4)();
        this._name = name;
        this._widgetPlacements = [];
    }
    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }
    set name(newName) {
        this._name = newName;
    }
    addWidgetPlacement(widgetPlacement) {
        this._widgetPlacements.push(widgetPlacement);
    }
}
exports.Template = Template;
