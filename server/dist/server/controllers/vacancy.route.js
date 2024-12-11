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
exports.Create = Create;
exports.Get = Get;
exports.Update = Update;
exports.Delete = Delete;
const services_1 = require("./services");
const schema_1 = require("../model/schema");
function Create(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = {
            company: req.body.company,
            salary: req.body.salary,
            status: req.body.status,
            note: req.body.note,
            vacancy: req.body.vacancy,
        };
        const { error, value } = schema_1.VacancySchemaValidate.validate(data);
        if (error) {
            res.send(error.message);
        }
        else {
            const service = yield (0, services_1.createVacancy)(value);
            res.status(201).send(service);
        }
    });
}
function Get(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const service = yield (0, services_1.getVacancies)();
        res.status(201).send(service);
    });
}
function Update(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const service = yield (0, services_1.updateVacancy)(req.body);
        res.status(201).send(service);
    });
}
function Delete(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const service = yield (0, services_1.deleteVacancy)(req.body._id);
        res.status(201).send(service);
    });
}
