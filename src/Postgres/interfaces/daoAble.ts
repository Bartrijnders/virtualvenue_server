import { Pool } from "pg";
import { DatabaseDeleteAble } from "./DBDeleteAble";
import { DatabaseGetAble } from "./DBGetAble";
import { DatabaseSaveAble } from "./DBSaveAble";
import { DatabaseUpdateAble } from "./DBUpdateAble";

export interface daoAble<T> extends DatabaseDeleteAble<T>, DatabaseSaveAble<T>, DatabaseUpdateAble<T>, DatabaseGetAble<T> {
};