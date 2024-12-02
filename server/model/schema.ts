import { Schema, model } from "mongoose";
import Joi from "joi";
import { TVacancy } from "../../src/types";

export const VacancySchemaValidate = Joi.object({
  company: Joi.string().required(),
  vacancy: Joi.string().required(),
  salary: Joi.number().required(),
  status: Joi.string().valid("Accept", "Decline", "Expectation").required(),
  note: Joi.string().required(),
});

const vacanciesSchema = new Schema<TVacancy>({
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

export const Vacancy = model<TVacancy>("Vacancies", vacanciesSchema);
