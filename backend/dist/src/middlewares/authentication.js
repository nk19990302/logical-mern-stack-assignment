"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require('dotenv').config();
const signingKey = process.env.PRIVATE_SIGNING_KEY;
const auth = (req, res, next) => {
    // get token from request
    const token = req.headers["x-auth-token"] || req.headers["authorization"];
    if (!token)
        return res.status(401).send({ status: 'error', statusCode: 401, message: "unauthorized access denied!" });
    // decode token 
    try {
        const decoded = jsonwebtoken_1.default.verify(token, signingKey);
        req.user = decoded;
        next();
    }
    catch (error) {
        res.status(500).send({ status: 'error', statusCode: 500, message: "something went wrong!", data: error });
    }
};
exports.default = auth;
