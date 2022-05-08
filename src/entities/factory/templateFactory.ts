import { Template } from "../../entities/Template";
import { TemplateType } from "../types/templateType";
import { factoryAble } from "./factoryAble";

export class templateFactory implements factoryAble<Template, TemplateType> {

    create =  (input: TemplateType) => {
        return new Template(input._name, input._id);
    };
    
}