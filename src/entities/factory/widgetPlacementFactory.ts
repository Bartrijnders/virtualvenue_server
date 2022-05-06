import { WidgetPlacementLike } from "../interfaces/widgetPlacementLike";
import { WidgetPlacementConstructorType } from "../types/widgetPlacementConstructorType";
import { WidgetPlacement } from "../WidgetPlacement";
import { factoryAble } from "./factoryAble";

export class WidgetPlacementFactory implements factoryAble<WidgetPlacementLike, WidgetPlacementConstructorType> {
    create = (input: WidgetPlacementConstructorType) => {
        return new WidgetPlacement(input.positionX, input.positionY, input.height, input.height, input.widget);
    };
    
}