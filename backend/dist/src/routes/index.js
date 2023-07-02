"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userRoutes_1 = __importDefault(require("./userRoutes"));
const todoRoutes_1 = __importDefault(require("./todoRoutes"));
const mainRoutes = (0, express_1.Router)();
// attach all different routes here
mainRoutes.use('/user', userRoutes_1.default);
mainRoutes.use('/todo', todoRoutes_1.default);
exports.default = mainRoutes;
