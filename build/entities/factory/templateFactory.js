"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.templateFactory = void 0;
const Template_1 = require("../../entities/Template");
class templateFactory {
    constructor() {
        this.create = (input) => {
            return new Template_1.Template(input._name, input._id);
        };
    }
}
exports.templateFactory = templateFactory;
