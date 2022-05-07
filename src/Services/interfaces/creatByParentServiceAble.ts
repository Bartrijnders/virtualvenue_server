export interface CreateByParentServiceAble<Type, Parent> {
    create: (values: Type, parent: Parent ) => void;
}