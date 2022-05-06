import { ContainAble } from "./containAble";
import { IdAble } from "./idAble";
import { WidgetLike } from "./widgetLike";

export interface WidgetPlacementLike extends IdAble{
    setXposition: (position_X: number) => void;
    getXposition: () => number;
    setYposition: (position_Y: number) => void;
    getYposition: () => number;
    setWidth: (width: number) => void;
    getWidth: () => number;
    setHeight: (height: number) => void;
    getHeight: () => number;
    getWidget: () => WidgetLike;
}