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
exports.WidgetDao = void 0;
const Widget_1 = require("../entities/Widget");
class WidgetDao {
    constructor(pool) {
        this.save = (toSave) => __awaiter(this, void 0, void 0, function* () {
            try {
                let result = yield this._pool.query('INSERT INTO widget (id, name) VALUES ($1, $2);', [toSave.id, toSave.name]);
            }
            catch (error) {
                console.log(error);
            }
        });
        this.update = (toUpdate) => __awaiter(this, void 0, void 0, function* () {
            try {
                let result = yield this._pool.query('UPDATE widget SET name = $1 WHERE id = $2', [toUpdate.name, toUpdate.id]);
            }
            catch (error) {
                console.log(error);
            }
        });
        this.getAll = () => __awaiter(this, void 0, void 0, function* () {
            try {
                let result = yield this._pool.query('SELECT * FROM widget');
                return result.rows;
            }
            catch (error) {
                console.log(error);
            }
            return [];
        });
        this.getById = (id) => {
            return new Widget_1.Widget('test');
        };
        this.delete = (toDelete) => __awaiter(this, void 0, void 0, function* () {
            try {
                let result = yield this._pool.query('DELETE FROM widget WHERE id = $1;', [toDelete.id]);
            }
            catch (error) {
                console.log(error);
            }
        });
        this._pool = pool;
    }
}
exports.WidgetDao = WidgetDao;
