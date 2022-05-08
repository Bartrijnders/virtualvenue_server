export interface TypeCheckAble<T> {
    isOfType: (toCheck: {}, instanceType: { new(): T; }) => boolean;
} 