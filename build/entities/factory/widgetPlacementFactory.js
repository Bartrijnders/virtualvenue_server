"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WidgetPlacementFactory = void 0;
const WidgetPlacement_1 = require("../WidgetPlacement");
class WidgetPlacementFactory {
    constructor() {
        this.create = (input) => {
            return new WidgetPlacement_1.WidgetPlacement(input._positionX, input._positionY, input._height, input._height, input._widget);
        };
    }
}
exports.WidgetPlacementFactory = WidgetPlacementFactory;
