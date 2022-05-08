"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemplateResultTranslater = void 0;
class TemplateResultTranslater {
    constructor(templateFactory) {
        this.translate = (queryResult) => {
            let templatesToReturn = [];
            queryResult.rows.forEach(element => {
                if (element.hasOwnProperty('id') && element.hasOwnProperty('name')) {
                    let values = { _name: element.name, _id: element.id };
                    templatesToReturn.push(this._templateFacotry.create(values));
                }
            });
            return templatesToReturn;
        };
        this._templateFacotry = templateFactory;
    }
}
exports.TemplateResultTranslater = TemplateResultTranslater;
