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
const user_1 = __importDefault(require("../models/user"));
const hash_1 = require("../helpers/hash");
const userService = {
    login: (email, password) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            // get all user with email id
            console.log('xxx', email, password);
            const users = yield user_1.default.find({ email: email });
            if (users.length > 0) {
                const user = users[0];
                // verify password
                const isAuthUser = yield (0, hash_1.matchPassword)(password, user.password);
                if (isAuthUser) {
                    return { status: 'success', statusCode: 200, data: user };
                }
            }
            return { status: 'error', statusCode: 400, message: 'wrong credentials' };
        }
        catch (error) {
            return { status: 'error', statusCode: 500, message: 'something went wrong', data: error };
        }
    }),
    signup: (name, email, password) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            // check for email presence in db
            const users = yield user_1.default.find({ email: email });
            if (users.length > 0) {
                return { status: 'error', statusCode: 400, message: 'email is already in use' };
            }
            // save new user in db
            const hash = yield (0, hash_1.generateHash)(password);
            const user = new user_1.default({ name, email, password: hash });
            return { status: 'success', statusCode: 2010, data: yield user.save() };
        }
        catch (error) {
            return { status: 'error', statusCode: 500, message: 'something went wrong', data: error };
        }
    }),
};
exports.default = userService;
