import {WidgetPlacementLike} from '../interfaces/widgetPlacementLike';
export type TemplateConstructorType = {
    _name: string;
    _id?: string
    _widgetPlacements?: WidgetPlacementLike[]
}