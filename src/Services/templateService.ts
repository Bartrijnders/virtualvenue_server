import { Pool } from "pg";
import { daoAble } from "../Postgres/interfaces/daoAble";

export class TemplateService {
    _templateDao: daoAble<TemplateService>;
    _pool: Pool;

    constructor(templateDao: daoAble<TemplateService>, pool: Pool){
      this._templateDao = templateDao;
      this._pool = pool;
    }

    getTemplate = async (id: string) => {
      let result = await this._templateDao.getById(id);
      
    }

}