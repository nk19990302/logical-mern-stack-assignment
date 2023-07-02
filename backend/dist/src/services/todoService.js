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
const todo_1 = __importDefault(require("../models/todo"));
const todoService = {
    get: (userId) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const allTodo = yield todo_1.default.find({ userId: userId });
            if (allTodo.length > 0) {
                return { status: 'success', statusCode: 200, data: allTodo };
            }
            return { status: 'error', statusCode: 404, message: 'todo not found for user' };
        }
        catch (error) {
            return { status: 'error', statusCode: 500, message: 'something went wrong', data: error };
        }
    }),
    add: (userId, task, status, createdAt) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const todo = new todo_1.default({ userId, task, status, createdAt });
            const res = yield todo.save();
            return { status: 'success', statusCode: 200, data: res };
        }
        catch (error) {
            return { status: 'error', statusCode: 500, message: 'something went wrong', data: error };
        }
    }),
    update: (id, userId, task, status, createdAt) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const res = yield todo_1.default.findByIdAndUpdate(id, { $set: { userId: userId, task: task, status: status } }, { new: true });
            return { status: 'success', statusCode: 200, data: res };
        }
        catch (error) {
            return { status: 'error', statusCode: 500, message: 'something went wrong', data: error };
        }
    }),
    delete: (id) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const res = yield todo_1.default.findOneAndRemove({ _id: id });
            return { status: 'success', statusCode: 200, data: res };
        }
        catch (error) {
            return { status: 'error', statusCode: 500, message: 'something went wrong', data: error };
        }
    }),
};
exports.default = todoService;
