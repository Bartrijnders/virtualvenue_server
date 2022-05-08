import {WidgetLike} from '../interfaces/widgetLike';
export type WidgetPlacementType = {
    _id?: string;
    _positionX: number;
    _positionY: number;
    _height: number;
    _width: number;
    _widget: WidgetLike;
}