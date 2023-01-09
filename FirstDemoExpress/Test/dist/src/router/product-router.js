"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRouter = void 0;
const express_1 = require("express");
const home_controller_1 = __importDefault(require("../controller/home-controller"));
exports.productRouter = (0, express_1.Router)();
exports.productRouter.get('/', home_controller_1.default.showHome);
exports.productRouter.get('/create', home_controller_1.default.showFormCreate);
exports.productRouter.post('/create', home_controller_1.default.create);
//# sourceMappingURL=product-router.js.map