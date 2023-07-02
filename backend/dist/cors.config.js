"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.corsOptions = void 0;
const whitelist = ["http://localhost:3000"]; //white list consumers
exports.corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true);
        }
        else {
            callback(null, false);
        }
    },
    methods: ["GET", "PUT", "POST", "DELETE", "OPTIONS"],
    optionsSuccessStatus: 200,
    credentials: true,
    allowedHeaders: [
        "Content-Type",
        "Authorization",
        "X-Requested-With",
        "device-remember-token",
        "Access-Control-Allow-Origin",
        "Origin",
        "Accept",
        "X-Auth-Token",
    ],
};
