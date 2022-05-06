import { GetServiceAble } from "../../Services/interfaces/getServiceAble";

export interface MultiContainAble<T> extends GetServiceAble<T> {
    add: (toAdd: T) => void;
    remove: (toRemove: T) => void;
}