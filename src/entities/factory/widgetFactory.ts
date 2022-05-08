import { WidgetLike } from "../interfaces/widgetLike";
import { WidgetType } from "../types/widgetType";
import { Widget } from "../Widget";
import { factoryAble } from "./factoryAble";

export class WidgetFactory implements factoryAble<WidgetLike, WidgetType>{
    create = (input: WidgetType) => {
        return new Widget(input.name, input.id);
    };
    
}