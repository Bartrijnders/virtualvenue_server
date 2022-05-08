export interface getByParentAble<T, P> {
    getByParent: (parent: P) => Promise<T[]>;
}