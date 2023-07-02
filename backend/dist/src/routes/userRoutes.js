"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = __importDefault(require("../controllers/userController"));
const userRoutes = (0, express_1.Router)();
userRoutes.post('/login', userController_1.default.login);
userRoutes.post('/signup', userController_1.default.signup);
exports.default = userRoutes;
