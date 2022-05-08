import { TemplateType } from "../../entities/types/templateType";

export interface CreateServiceAble<C, T> {
    create: (values: C) => T;
}