import { QueryResult } from "pg";

export interface queryResultTranslateAble<T> {
    translate: (queryResult: QueryResult) => T[];
}