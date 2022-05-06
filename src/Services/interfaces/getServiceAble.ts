export interface GetServiceAble<T> {
    getAll: () => Promise<T[]>;
    getById: (id: string) => Promise<T | undefined>;
}