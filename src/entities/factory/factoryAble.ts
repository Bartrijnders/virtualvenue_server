import {Template} from '../Template'
import { TemplateType } from '../types/templateType';

export interface factoryAble<T, P> {
    create: (input: P) => T;
}