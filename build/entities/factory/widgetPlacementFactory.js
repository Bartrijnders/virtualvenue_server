"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WidgetPlacementFactory = void 0;
const WidgetPlacement_1 = require("../WidgetPlacement");
class WidgetPlacementFactory {
    constructor() {
        this.create = (input) => {
            return new WidgetPlacement_1.WidgetPlacement(input.positionX, input.positionY, input.height, input.height, input.widget);
        };
    }
}
exports.WidgetPlacementFactory = WidgetPlacementFactory;
