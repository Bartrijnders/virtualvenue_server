import { WidgetLike } from "../interfaces/widgetLike";
import { WidgetConstructorType } from "../types/widgetConstructorType";
import { Widget } from "../Widget";
import { factoryAble } from "./factoryAble";

export class WidgetFactory implements factoryAble<WidgetLike, WidgetConstructorType>{
    create = (input: WidgetConstructorType) => {
        return new Widget(input.name, input.id);
    };
    
}