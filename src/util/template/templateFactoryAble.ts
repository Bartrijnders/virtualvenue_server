import {Template} from '../../entities/Template'

export interface TemplateFactoryAble {
    create: (name: string, id?: string) => Template;
}