import { Pool } from "pg";
import { Template } from "../entities/Template";
import { daoAble } from "../Postgres/interfaces/daoAble";
import { TemplateDao } from "../Postgres/templateDao";
import { TemplateFactoryAble } from "../util/template/templateFactoryAble";

export class TemplateService {
  _templateDao: daoAble<Template>;
  _pool: Pool;
  private _templateFactory: TemplateFactoryAble;

  constructor(templateDao: daoAble<Template>, pool: Pool, templateFactory: TemplateFactoryAble) {
    this._templateDao = templateDao;
    this._pool = pool;
    this._templateFactory = templateFactory;
  }

  getTemplate = async (id: string) => {
    let result = await this._templateDao.getById(id);
    return result;
  }

  getAllTemplates = async () => {
    let result = await this._templateDao.getAll();
    return result;
  }

  createTemplate = (name: string) => {
    let newTemplate = this._templateFactory.create(name);
    this._templateDao.save(newTemplate);
  }

  updateTemplateName = (templateToUpdate: Template, newName: string) => {
    if (templateToUpdate.name !== newName) {
      templateToUpdate.name = newName;
      this._templateDao.update(templateToUpdate);
    }
  }

  deleteTemplate = (templateToDelete: Template) => {
    this._templateDao.delete(templateToDelete);
  }



}