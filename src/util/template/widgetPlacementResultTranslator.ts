import { QueryResult } from "pg";
import { WidgetPlacementLike } from "../../entities/interfaces/widgetPlacementLike";
import { queryResultTranslateAble } from "./interfaces/queryResultTranslateAble";

export class WidgetPlacementResultTranslator implements queryResultTranslateAble<WidgetPlacementLike> {

    translate = (queryResult: QueryResult<any>) => {
        return [];
    };
    
}