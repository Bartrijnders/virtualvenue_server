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
exports.WidgetPlacementDao = void 0;
class WidgetPlacementDao {
    constructor(pool, widgetDao) {
        this.save = (toSave, parent) => __awaiter(this, void 0, void 0, function* () {
            try {
                let result = yield this._pool.query('INSERT INTO widget_placement (id, position_x, position_y, height, width, widget_id, templateid ) VALUES ($1, $2);', [toSave.id, toSave.positionX, toSave.positionY, toSave.height, toSave.width, toSave.widget.id, parent.id]);
            }
            catch (error) {
                console.log(error);
            }
        });
        this.update = (toUpdate) => __awaiter(this, void 0, void 0, function* () {
            try {
                let result = yield this._pool.query('UPDATE widget_placement SET position_x = $1, position_y = $2, height = $3, width = $4 WHERE id = $5', [toUpdate.positionX, toUpdate.positionY, toUpdate.height, toUpdate.width, toUpdate.id]);
            }
            catch (error) {
                console.log(error);
            }
        });
        this.delete = (toDelete) => __awaiter(this, void 0, void 0, function* () {
            try {
                let result = yield this._pool.query('DELETE FROM widget_placement WHERE id = $1;', [toDelete.id]);
            }
            catch (error) {
                console.log(error);
            }
        });
        this.getByParent = (parent) => __awaiter(this, void 0, void 0, function* () {
            try {
                let result = yield this._pool.query('SELECT * FROM widget_placement WHERE templateid = $1', [parent.id]);
                return result.rows;
            }
            catch (error) {
                console.log(error);
            }
            return [];
        });
        this._pool = pool;
        this._widgetDao = widgetDao;
    }
}
exports.WidgetPlacementDao = WidgetPlacementDao;
