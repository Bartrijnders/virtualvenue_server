import { Template } from "../../entities/Template";
import { TemplateConstructorType } from "../../entities/types/templateConstructorType";
import { factoryAble } from "./factoryAble";

export class templateFactory implements factoryAble<Template, TemplateConstructorType> {

    create =  (input: TemplateConstructorType) => {
        return new Template(input._name, input._id);
    };
    
}