export interface DatabaseUpdateAble<T> {
    update: (toUpdate: T) => void
}