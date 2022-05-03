export interface DatabaseGetAble<T> {
    getAll: () => Promise<any[]>,
    getById: (id: string) => T;
}