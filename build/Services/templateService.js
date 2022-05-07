"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemplateService = void 0;
class TemplateService {
    constructor(templateDao, templateFactory) {
        this.getById = (id) => __awaiter(this, void 0, void 0, function* () {
            let result = this._templateDao.getById(id);
            return result;
        });
        this.create = (values) => {
            let newTemplate = this._templateFactory.create(values);
        };
        this.get = (id) => __awaiter(this, void 0, void 0, function* () {
            let result = yield this._templateDao.getById(id);
            return result;
        });
        this.getAll = () => __awaiter(this, void 0, void 0, function* () {
            let result = yield this._templateDao.getAll();
            return result;
        });
        this.update = (templateToUpdate) => {
            this._templateDao.update(templateToUpdate);
        };
        this.delete = (templateToDelete) => {
            this._templateDao.delete(templateToDelete);
        };
        this._templateDao = templateDao;
        this._templateFactory = templateFactory;
    }
}
exports.TemplateService = TemplateService;
