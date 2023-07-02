"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const mongoose_1 = __importDefault(require("mongoose"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const UserSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    }
});
//custom method to generate authToken 
UserSchema.methods.generateAuthToken = function () {
    const signingKey = process.env.PRIVATE_SIGNING_KEY;
    const token = jsonwebtoken_1.default.sign({ _id: this._id, email: this.email }, signingKey);
    return token;
};
const User = mongoose_1.default.model("User", UserSchema);
exports.default = User;
