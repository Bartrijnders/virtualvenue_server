export interface databaseChildObjectSaveAble<T, P> {
    save: (toSave: T, parent: P) => void;
}