import { TemplateConstructorType } from "../../entities/types/templateConstructorType";

export interface CreateServiceAble<T> {
    create: (values: T) => void;
}