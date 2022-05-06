import { QueryResult } from "pg";
import { Template } from "../../entities/Template";
import { queryResultTranslateAble } from "./interfaces/queryResultTranslateAble";
import { factoryAble } from "../../entities/factory/factoryAble";
import { TemplateConstructorType } from "../../entities/types/templateConstructorType";

export class TemplateResultTranslater implements queryResultTranslateAble<Template> {

    private _templateFacotry: factoryAble<Template, TemplateConstructorType>;

    constructor(templateFactory: factoryAble<Template, TemplateConstructorType>) {
        this._templateFacotry = templateFactory;
    }

    translate = (queryResult: QueryResult<any>) => {
        let templatesToReturn: Template[] = [];
        queryResult.rows.forEach(element => {
            if (element.hasOwnProperty('id') && element.hasOwnProperty('name')) {
                let values = {name: element.name, id: element.id};
                templatesToReturn.push(this._templateFacotry.create(values));
            }
        });
        return templatesToReturn;
    };

}