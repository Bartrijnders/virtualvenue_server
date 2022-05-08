export interface DatabasGetByIdAble<T> {
    getById: (id: string) => Promise<T>;
}