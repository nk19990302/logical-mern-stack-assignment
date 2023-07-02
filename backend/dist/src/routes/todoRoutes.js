"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todoController_1 = __importDefault(require("../controllers/todoController"));
const authentication_1 = __importDefault(require("../middlewares/authentication"));
const todoRoutes = (0, express_1.Router)();
todoRoutes.get('/:userId', authentication_1.default, todoController_1.default.get);
todoRoutes.post('/', authentication_1.default, todoController_1.default.add);
todoRoutes.put('/', authentication_1.default, todoController_1.default.update);
todoRoutes.delete('/:id', authentication_1.default, todoController_1.default.delete);
exports.default = todoRoutes;
