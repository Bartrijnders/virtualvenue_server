export interface DatabaseGetAble<T> {
    getAll: () => Promise<T[]>,
    getById: (id: string) => Promise<T | undefined>;
}