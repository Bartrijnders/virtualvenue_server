import { QueryResult } from "pg";
import { Template } from "../../entities/Template";
import { queryResultTranslateAble } from "./interfaces/queryResultTranslateAble";
import { TemplateFactoryAble } from "./templateFactoryAble";

export class TemplateResultTranslater implements queryResultTranslateAble<Template> {

    private _templateFacotry: TemplateFactoryAble;

    constructor(templateFactory: TemplateFactoryAble) {
        this._templateFacotry = templateFactory;
    }

    translate = (queryResult: QueryResult<any>) => {
        let templatesToReturn: Template[] = [];
        queryResult.rows.forEach(element => {
            if (element.hasOwnProperty('id') && element.hasOwnProperty('name')) {
                templatesToReturn.push(this._templateFacotry.create(element.name, element.id));
            }
        });
        return templatesToReturn;
    };

}