"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vacancy = exports.VacancySchemaValidate = void 0;
const mongoose_1 = require("mongoose");
const joi_1 = __importDefault(require("joi"));
exports.VacancySchemaValidate = joi_1.default.object({
    company: joi_1.default.string().required(),
    vacancy: joi_1.default.string().required(),
    salary: joi_1.default.number().required(),
    status: joi_1.default.string().valid("Accept", "Decline", "Expectation").required(),
    note: joi_1.default.string().required(),
});
const vacanciesSchema = new mongoose_1.Schema({
    company: {
        type: String,
        required: true,
    },
    vacancy: {
        type: String,
        required: true,
    },
    salary: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    note: {
        type: String,
        required: true,
    },
});
exports.Vacancy = (0, mongoose_1.model)("Vacancies", vacanciesSchema);
