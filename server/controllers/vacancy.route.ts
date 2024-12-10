import {
  createVacancy,
  deleteVacancy,
  getVacancies,
  updateVacancy,
} from "./services";
import { Request, Response } from "express";
import { VacancySchemaValidate } from "../model/schema";
import { TVacancy } from "../../src/types";

export async function Create(req: Request, res: Response) {
  const data: Omit<TVacancy, "_id"> = {
    company: req.body.company,
    salary: req.body.salary,
    status: req.body.status,
    note: req.body.note,
    vacancy: req.body.vacancy,
  };
  const { error, value } = VacancySchemaValidate.validate(data);

  if (error) {
    res.send(error.message);
  } else {
    const service = await createVacancy(value);
    res.status(201).send(service);
  }
}

export async function Get(req: Request, res: Response) {
  const service = await getVacancies();
  res.status(201).send(service);
}

export async function Update(req: Request, res: Response) {
  const service = await updateVacancy(req.body);
  res.status(201).send(service);
}

export async function Delete(req: Request, res: Response) {
  const service = await deleteVacancy(req.body._id);
  res.status(201).send(service);
}
