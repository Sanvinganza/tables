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
Object.defineProperty(exports, "__esModule", { value: true });
exports.createVacancy = createVacancy;
exports.getVacancies = getVacancies;
exports.updateVacancy = updateVacancy;
exports.deleteVacancy = deleteVacancy;
const schema_1 = require("../model/schema");
function createVacancy(data) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const newVacancy = yield schema_1.Vacancy.create(data);
            return {
                status: "Success",
                data: newVacancy,
            };
        }
        catch (error) {
            return {
                status: "Failed",
                message: error,
            };
        }
    });
}
function getVacancies() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const vacancies = yield schema_1.Vacancy.find({});
            return vacancies;
        }
        catch (error) {
            return {
                status: "Failed",
                message: error,
            };
        }
    });
}
function updateVacancy(data) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const vacancy = yield schema_1.Vacancy.findByIdAndUpdate({ _id: data._id }, data, {
                new: true,
            });
            if (!vacancy) {
                return {
                    status: "Failed",
                    message: "Post not available",
                };
            }
            return {
                status: "Success",
                data: vacancy,
            };
        }
        catch (error) {
            return {
                status: "Failed",
                data: error,
            };
        }
    });
}
function deleteVacancy(_id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const vacancy = yield schema_1.Vacancy.findByIdAndDelete({ _id });
            if (!vacancy) {
                return {
                    status: "Failed",
                    message: "Post not available",
                };
            }
            else {
                return {
                    status: "Success",
                    message: vacancy,
                };
            }
        }
        catch (error) {
            return {
                status: "Failed",
                message: error,
            };
        }
    });
}