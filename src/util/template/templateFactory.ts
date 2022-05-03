import { Template } from "../../entities/Template";
import { TemplateFactoryAble } from "./templateFactoryAble";

export class templateFactory implements TemplateFactoryAble {

    create =  (name: string, id?: string) => {
        return new Template(name, id);
    };
    
}