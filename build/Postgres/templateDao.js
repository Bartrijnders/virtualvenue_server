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
const Template_1 = require("../entities/Template");
class TemplateDao {
    constructor(pool, widgetPlacementDao) {
        this.save = (toSave) => __awaiter(this, void 0, void 0, function* () {
            try {
                let result = yield this._pool.query('INSERT INTO template (id, name) VALUES ($1, $2);', [toSave.id, toSave.name]);
            }
            catch (error) {
                console.log(error);
            }
        });
        this.update = (toUpdate) => __awaiter(this, void 0, void 0, function* () {
            try {
                let result = yield this._pool.query('UPDATE template SET name = $1 WHERE id = $2', [toUpdate.name, toUpdate.id]);
            }
            catch (error) {
                console.log(error);
            }
        });
        this.getAll = () => __awaiter(this, void 0, void 0, function* () {
            try {
                let result = yield this._pool.query('SELECT * FROM template');
                return result.rows;
            }
            catch (error) {
                console.log(error);
            }
            return [];
        });
        this.getById = (id) => {
            return new Template_1.Template('test');
        };
        this.delete = (toDelete) => __awaiter(this, void 0, void 0, function* () {
            try {
                let result = yield this._pool.query('DELETE FROM template WHERE id = $1;', [toDelete.id]);
            }
            catch (error) {
                console.log(error);
            }
        });
        this._pool = pool;
        this._widgetPlacementDao = widgetPlacementDao;
    }
}
exports.TemplateDao = TemplateDao;
