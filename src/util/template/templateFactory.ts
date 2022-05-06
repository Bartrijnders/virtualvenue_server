import { Template } from "../../entities/Template";
import { TemplateConstructorType } from "../../entities/types/templateConstructorType";
import { TemplateFactoryAble } from "./templateFactoryAble";

export class templateFactory implements TemplateFactoryAble {

    create =  (input: TemplateConstructorType) => {
        return new Template(input.name, input.id);
    };
    
}