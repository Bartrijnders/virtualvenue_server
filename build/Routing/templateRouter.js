"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
exports.router = express_1.default.Router();
/**
 * Router method. Returns all templates.
 */
exports.router.get('/', (res, req, next) => {
});
/**
 * Router method. Returns a template with the given id.
 */
exports.router.get('/:id', (res, req, next) => {
});
