"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Widget = void 0;
const uuid_1 = require("uuid");
class Widget {
    constructor(name, id) {
        this.getId = () => {
            return this._id;
        };
        this.getName = () => {
            return this._name;
        };
        this.setName = (newName) => {
            this._name = newName;
        };
        this._id = id !== null && id !== void 0 ? id : (0, uuid_1.v4)();
        this._name = name;
    }
}
exports.Widget = Widget;
