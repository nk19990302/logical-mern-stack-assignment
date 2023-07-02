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
const todoService_1 = __importDefault(require("../services/todoService"));
const todo_1 = __importDefault(require("../models/todo"));
const todoController = {
    get: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { userId } = req.params;
        const authUser = req.user;
        if (authUser._id !== userId) {
            res.send({ status: 'error', statusCode: 401, message: 'not authorized to access!' });
            return;
        }
        res.send(yield todoService_1.default.get(userId));
    }),
    add: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { userId, task, status, createdAt } = req.body;
        const authUser = req.user;
        if (authUser._id !== userId) {
            res.send({ status: 'error', statusCode: 401, message: 'not authorized to access!' });
            return;
        }
        res.send(yield todoService_1.default.add(userId, task, status, createdAt));
    }),
    update: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { _id, userId, task, status, createdAt } = req.body;
        const authUser = req.user;
        if (authUser._id !== userId) {
            res.send({ status: 'error', statusCode: 401, message: 'not authorized to access!' });
            return;
        }
        res.send(yield todoService_1.default.update(_id, userId, task, status, createdAt));
    }),
    delete: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { id } = req.params;
        const todo = yield todo_1.default.findById(id);
        const authUser = req.user;
        if (authUser._id !== (todo === null || todo === void 0 ? void 0 : todo.userId)) {
            res.send({ status: 'error', statusCode: 401, message: 'not authorized to access!' });
            return;
        }
        res.send(yield todoService_1.default.delete(id));
    })
};
exports.default = todoController;
