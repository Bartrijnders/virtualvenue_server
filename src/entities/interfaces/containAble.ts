export interface ContainAble<T> {
    setItem: (newObject: T) => void;
    getItem: () => T; 
}