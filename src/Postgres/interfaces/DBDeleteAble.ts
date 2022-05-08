export interface DatabaseDeleteAble<T> {
    delete: (toDelete: T) => void;
} 