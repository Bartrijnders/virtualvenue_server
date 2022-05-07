"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const templateRouter_1 = require("./Routing/templateRouter");
const app = (0, express_1.default)();
require('dotenv').config();
app.use('/template', templateRouter_1.templateRouter);
app.listen(3001, () => {
});
