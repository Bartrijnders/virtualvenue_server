import { QueryResult } from "pg";
import { Template } from "../../entities/Template";
import { queryResultTranslateAble } from "./interfaces/queryResultTranslateAble";
import { factoryAble } from "../../entities/factory/factoryAble";
import { TemplateType } from "../../entities/types/templateType";

export class TemplateResultTranslater implements queryResultTranslateAble<Template> {

    private _templateFacotry: factoryAble<Template, TemplateType>;

    constructor(templateFactory: factoryAble<Template, TemplateType>) {
        this._templateFacotry = templateFactory;
    }

    translate = (queryResult: QueryResult<any>) => {
        let templatesToReturn: Template[] = [];
        queryResult.rows.forEach(element => {
            if (element.hasOwnProperty('id') && element.hasOwnProperty('name')) {
                let values = {_name: element.name, _id: element.id};
                templatesToReturn.push(this._templateFacotry.create(values));
            }
        });
        return templatesToReturn;
    };

}