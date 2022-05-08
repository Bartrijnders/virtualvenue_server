"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemplateTypeChecker = void 0;
class TemplateTypeChecker {
    constructor() {
        this.isOfType = (toCheck) => {
            try {
                toCheck;
                return true;
            }
            catch (error) {
                return false;
            }
        };
    }
}
exports.TemplateTypeChecker = TemplateTypeChecker;
