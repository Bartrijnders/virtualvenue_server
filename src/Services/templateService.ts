import { Template } from "../entities/Template";
import { TemplateType } from "../entities/types/templateType";
import { daoAble } from "../Postgres/interfaces/daoAble";
import { factoryAble } from "../entities/factory/factoryAble";
import { CrudServiceAble } from "./interfaces/crudServiceAble";
import { TemplateLike } from "../entities/interfaces/templateLike";

export class TemplateService implements CrudServiceAble<TemplateLike, TemplateType>{
  _templateDao: daoAble<TemplateLike>;
  private _templateFactory: factoryAble<TemplateLike, TemplateType>;

  constructor(templateDao: daoAble<TemplateLike>, templateFactory: factoryAble<TemplateLike, TemplateType>) {
    this._templateDao = templateDao;
    this._templateFactory = templateFactory;
  }
  getById = async (id: string) => {
    let result = this._templateDao.getById(id);
    return result;
  };
  create = (values: TemplateType) => {
    let newTemplate = this._templateFactory.create(values);
    this._templateDao.save(newTemplate);
    return newTemplate;
  };

  get = async (id: string) => {
    let result = await this._templateDao.getById(id);
    return result;
  }

  getAll = async() => {
    let result = await this._templateDao.getAll();
    return result;
  }

  update = (templateToUpdate: TemplateLike) => {
      this._templateDao.update(templateToUpdate);
  }

  delete = (templateToDelete: TemplateLike) => {
    this._templateDao.delete(templateToDelete);
  }
}