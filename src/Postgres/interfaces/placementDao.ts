import { DatabaseDeleteAble } from "./databaseDeleteAble";
import { DatabaseUpdateAble } from "./databseUpdateAble";
import {databaseChildObjectSaveAble as DatabaseChildObjectSaveAble} from "../interfaces/databaseChildObjectSaveAble"
import { Template } from "../../entities/Template";
import { getByParentAble } from "./databaseGetByParent";


export interface PlacementDao<T, Parent> extends DatabaseUpdateAble<T>, DatabaseDeleteAble<T>, DatabaseChildObjectSaveAble<T, Parent>, getByParentAble<T, Parent> {
    
}