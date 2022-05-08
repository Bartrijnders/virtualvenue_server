import { DatabaseDeleteAble } from "./DBDeleteAble";
import { DatabaseUpdateAble } from "./DBUpdateAble";
import {databaseChildObjectSaveAble as DatabaseChildObjectSaveAble} from "./DBChildObjectSaveAble"
import {DatabasGetByIdAble} from './DBGetByIdAble'
import { getByParentAble } from "./DBGetByParent";


export interface PlacementDao<T, Parent> extends DatabasGetByIdAble<T> ,DatabaseUpdateAble<T>, DatabaseDeleteAble<T>, DatabaseChildObjectSaveAble<T, Parent>, getByParentAble<T, Parent> {
    
}