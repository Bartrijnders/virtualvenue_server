import {Template} from '../../entities/Template'
import { TemplateConstructorType } from '../../entities/types/templateConstructorType';

export interface TemplateFactoryAble {
    create: (input: TemplateConstructorType) => Template;
}