"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const vacancy_route_1 = require("./controllers/vacancy.route");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: process.env.CLIENT_URL,
}));
const port = process.env.PORT || 5000;
const { MONGO_URI } = process.env;
mongoose_1.default
    .connect(MONGO_URI)
    .then(() => console.log("🚀MongoDB connected"))
    .catch((err) => console.log(err));
app.use(body_parser_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.get("/api/", vacancy_route_1.Get);
app.post("/api/create", vacancy_route_1.Create);
app.post("/api/update", vacancy_route_1.Update);
app.delete("/api/delete", vacancy_route_1.Delete);
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
