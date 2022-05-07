import { Template } from "../entities/Template";
import { TemplateConstructorType } from "../entities/types/templateConstructorType";
import { daoAble } from "../Postgres/interfaces/daoAble";
import { factoryAble } from "../entities/factory/factoryAble";
import { CrudServiceAble } from "./interfaces/crudServiceAble";

export class TemplateService implements CrudServiceAble<Template, TemplateConstructorType>{
  _templateDao: daoAble<Template>;
  private _templateFactory: factoryAble<Template, TemplateConstructorType>;

  constructor(templateDao: daoAble<Template>, templateFactory: factoryAble<Template, TemplateConstructorType>) {
    this._templateDao = templateDao;
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