import { Pool } from "pg";
import { databaseDeleteAble } from "./databaseDeleteAble";
import { DatabaseGetAble } from "./databaseGetAble";
import { DatabaseSaveAble } from "./databaseSaveAble";
import { DatabaseUpdateAble } from "./databseUpdateAble";

export interface daoAble<T> extends databaseDeleteAble<T>, DatabaseSaveAble<T>, DatabaseUpdateAble<T>, DatabaseGetAble<T> {
};