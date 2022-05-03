"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Widget = void 0;
const uuid_1 = require("uuid");
class Widget {
    constructor(name, id) {
        this._id = id !== null && id !== void 0 ? id : (0, uuid_1.v4)();
        this._name = name;
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
}
exports.Widget = Widget;
