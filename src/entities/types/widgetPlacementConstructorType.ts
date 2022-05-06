import {WidgetLike} from '../interfaces/widgetLike';
export type WidgetPlacementConstructorType = {
    id?: string;
    positionX: number;
    positionY: number;
    height: number;
    width: number;
    widget: WidgetLike;
}