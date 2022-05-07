import { TemplateConstructorType } from "../../entities/types/templateConstructorType";

export interface CreateServiceAble<C, T> {
    create: (values: C) => T;
}