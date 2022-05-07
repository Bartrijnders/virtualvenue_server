export interface GetByParentServiceAble<T, Parent> {
    getByParent: (parent: Parent) => Promise<T[]>
}