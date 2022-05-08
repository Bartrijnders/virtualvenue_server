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
exports.TemplateDao = void 0;
class TemplateDao {
    constructor(pool, widgetPlacementDao, templateResultTranslator) {
        this.save = (toSave) => __awaiter(this, void 0, void 0, function* () {
            try {
                let result = yield this._pool.query('INSERT INTO template (id, name) VALUES ($1, $2);', [toSave.getId(), toSave.getName()]);
                return result;
            }
            catch (error) {
                console.log(error);
            }
        });
        this.update = (toUpdate) => __awaiter(this, void 0, void 0, function* () {
            try {
                let result = yield this._pool.query('UPDATE template SET name = $1 WHERE id = $2', [toUpdate.getName(), toUpdate.getId()]);
            }
            catch (error) {
                console.log(error);
            }
        });
        this.getAll = () => __awaiter(this, void 0, void 0, function* () {
            try {
                let result = yield this._pool.query('SELECT * FROM template');
                return this._templateResultTranslator.translate(result);
            }
            catch (error) {
                console.log(error);
            }
            return [];
        });
        this.getById = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                let result = yield this._pool.query('Select * FROM template WHERE id = $1', [id]);
                console.log(result);
                return this._templateResultTranslator.translate(result)[0];
            }
            catch (error) {
                console.log(error);
                return Promise.reject();
            }
        });
        this.delete = (toDelete) => __awaiter(this, void 0, void 0, function* () {
            try {
                let result = yield this._pool.query('DELETE FROM template WHERE id = $1;', [toDelete.getId()]);
            }
            catch (error) {
                console.log(error);
            }
        });
        this._pool = pool;
        this._widgetPlacementDao = widgetPlacementDao;
        this._templateResultTranslator = templateResultTranslator;
    }
}
exports.TemplateDao = TemplateDao;
