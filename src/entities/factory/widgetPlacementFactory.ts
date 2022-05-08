import { WidgetPlacementLike } from "../interfaces/widgetPlacementLike";
import { WidgetPlacementType } from "../types/widgetPlacementType";
import { WidgetPlacement } from "../WidgetPlacement";
import { factoryAble } from "./factoryAble";

export class WidgetPlacementFactory implements factoryAble<WidgetPlacementLike, WidgetPlacementType> {
    create = (input: WidgetPlacementType) => {
        return new WidgetPlacement(input._positionX, input._positionY, input._height, input._height, input._widget);
    };
    
}