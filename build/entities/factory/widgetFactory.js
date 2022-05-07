"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WidgetFactory = void 0;
const Widget_1 = require("../Widget");
class WidgetFactory {
    constructor() {
        this.create = (input) => {
            return new Widget_1.Widget(input.name, input.id);
        };
    }
}
exports.WidgetFactory = WidgetFactory;
