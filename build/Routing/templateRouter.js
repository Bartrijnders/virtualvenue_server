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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.templateRouter = void 0;
const express_1 = __importDefault(require("express"));
const serviceContainer_1 = __importDefault(require("../Services/serviceContainer"));
exports.templateRouter = express_1.default.Router();
/**
 * Router method. Returns all templates.
 */
exports.templateRouter.get('/', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let result = yield serviceContainer_1.default.getTemplateService().getAll();
    if (result) {
        res.status(200).json(result);
    }
    else {
        res.status(404).json([]);
    }
}));
/**
 * Router method. Returns a template with the given id.
 */
exports.templateRouter.get('/:id', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let id = req.params.id;
        let result = yield serviceContainer_1.default.getTemplateService().getById(id);
        console.log(result);
        if (result !== undefined) {
            res.status(200).json(result);
        }
        else {
            res.status(404).json({});
        }
    }
    catch (error) {
        console.log(error);
    }
}));
exports.templateRouter.post('/', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let query = req.query;
        if (query.hasOwnProperty('name') && typeof query.name === 'string') {
            serviceContainer_1.default.getTemplateService().create({ name: query.name });
        }
    }
    catch (error) {
    }
}));
