export interface databaseDeleteAble<T> {
    delete: (toDelete: T) => void;
} 