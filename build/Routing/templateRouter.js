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
exports.templateRouter.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
exports.templateRouter.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let query = req.query;
        if (query.hasOwnProperty('_name') && typeof query._name === 'string') {
            let result = serviceContainer_1.default.getTemplateService().create({ _name: query._name });
            res.status(201).json(result);
        }
        else {
            res.status(400).json({});
        }
    }
    catch (error) {
        res.status(500).send(error);
    }
}));
exports.templateRouter.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let id = req.params.id;
        let template = yield serviceContainer_1.default.getTemplateService().getById(id);
        if (!template) {
            res.sendStatus(404);
        }
        else {
            let query = req.query;
            if (query.hasOwnProperty('_name') && typeof query._name === 'string') {
                template.setName(query._name);
                serviceContainer_1.default.getTemplateService().update(template);
                res.status(201).json(template);
                return;
            }
        }
        res.sendStatus(400);
    }
    catch (error) {
        res.status(500).send(error);
    }
}));
exports.templateRouter.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let id = req.params.id;
    let found = yield serviceContainer_1.default.getTemplateService().getById(id);
    if (found) {
        serviceContainer_1.default.getTemplateService().delete(found);
        res.sendStatus(204);
        return;
    }
    else {
        res.sendStatus(404);
        return;
    }
}));
