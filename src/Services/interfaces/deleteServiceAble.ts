export interface DeleteServiceAble<T> {
    delete: (toDelete: T) => void;
}