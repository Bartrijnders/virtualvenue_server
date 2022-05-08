"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const templateRouter_1 = require("./Routing/templateRouter");
const widgetPlacementRouting_1 = require("./Routing/widgetPlacementRouting");
const templateTypeChecker_1 = require("./util/typechecker/templateTypeChecker");
const app = (0, express_1.default)();
require('dotenv').config();
app.use('/template', templateRouter_1.templateRouter);
app.use('/template/:id/widgetplacement', (req, res, next) => (0, widgetPlacementRouting_1.widgetPlacementRouter)(req.params));
app.listen(3001, () => {
    console.log('listening');
    let typeCheckAble = new templateTypeChecker_1.TemplateTypeChecker;
    console.log(typeCheckAble.isOfType({ _id: 'name', }));
});
