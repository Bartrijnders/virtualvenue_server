import { Pool } from "pg";
import { Template } from "../entities/Template";
import { TemplateConstructorType } from "../entities/types/templateConstructorType";
import { daoAble } from "../Postgres/interfaces/daoAble";
import { TemplateDao } from "../Postgres/templateDao";
import { TemplateFactoryAble } from "../util/template/templateFactoryAble";
import { CrudServiceAble } from "./interfaces/crudServiceAble";

export class TemplateService implements CrudServiceAble<Template>{
  _templateDao: daoAble<Template>;
  _pool: Pool;
  private _templateFactory: TemplateFactoryAble;

  constructor(templateDao: daoAble<Template>, pool: Pool, templateFactory: TemplateFactoryAble) {
    this._templateDao = templateDao;
    this._pool = pool;
    this._templateFactory = templateFactory;
  }
  getById = async (id: string) => {
    let result = this._templateDao.getById(id);
    return result;
  };
  create = (values: TemplateConstructorType) => {
    let newTemplate = this._templateFactory.create(values);
  };

  get = async (id: string) => {
    let result = await this._templateDao.getById(id);
    return result;
  }

  getAll = async() => {
    let result = await this._templateDao.getAll();
    return result;
  }

  update = (templateToUpdate: Template) => {
      this._templateDao.update(templateToUpdate);
  }

  delete = (templateToDelete: Template) => {
    this._templateDao.delete(templateToDelete);
  }
}