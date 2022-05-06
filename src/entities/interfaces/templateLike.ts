import { MultiContainAble } from "./multiContainAble";
import { IdAble } from "./idAble";
import { NameAlbe } from "./nameAble";
import { WidgetPlacementLike } from "./widgetPlacementLike";

export interface TemplateLike extends IdAble, NameAlbe, MultiContainAble<WidgetPlacementLike>{
    
}