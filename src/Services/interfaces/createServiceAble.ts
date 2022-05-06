import { TemplateConstructorType } from "../../entities/types/templateConstructorType";

export interface CreateServiceAble<T> {
    create: (templateValues: TemplateConstructorType) => void;
}