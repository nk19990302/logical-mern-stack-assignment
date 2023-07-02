"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const routes_1 = __importDefault(require("./src/routes"));
const cors_config_1 = require("./cors.config");
const mongoose_1 = __importDefault(require("./src/helpers/mongoose"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
// connect mongo db
(0, mongoose_1.default)();
// apply middleware
app.use((0, cors_1.default)(cors_config_1.corsOptions));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({
    extended: true,
}));
// attach main routes
app.use('/', routes_1.default);
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
