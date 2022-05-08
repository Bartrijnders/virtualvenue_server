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
exports.widgetPlacementRouter = void 0;
const express_1 = __importDefault(require("express"));
const serviceContainer_1 = __importDefault(require("../Services/serviceContainer"));
let widgetPlacementRouter = (config) => {
    let router = express_1.default.Router();
    router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let parent = yield serviceContainer_1.default.getTemplateService().getById(config.id);
            if (parent !== undefined) {
                let widgetPlacements = yield serviceContainer_1.default.getWidgetPlacementService().getByParent(parent);
                res.status(200).json(widgetPlacements);
            }
            else {
                res.sendStatus(404);
            }
        }
        catch (error) {
            res.status(500).send(error);
        }
    }));
    router.get('/:id', (req, res) => {
        /*try {
            let widgetplacement = await  serviceContainer.getWidgetPlacementService().
        }*/
    });
    return router;
};
exports.widgetPlacementRouter = widgetPlacementRouter;
