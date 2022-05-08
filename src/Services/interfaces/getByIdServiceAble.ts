export interface GetByIdServiceAble<T> {
    getById: (id: string) => Promise<T>
}