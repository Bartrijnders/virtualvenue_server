import {Template} from '../Template'
import { TemplateConstructorType } from '../types/templateConstructorType';

export interface factoryAble<T, P> {
    create: (input: P) => T;
}