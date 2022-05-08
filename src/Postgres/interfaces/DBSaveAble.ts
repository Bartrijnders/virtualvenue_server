export interface DatabaseSaveAble<T> {
    save: (toSave: T) => void;
}