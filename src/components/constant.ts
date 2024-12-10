import { TStatus } from "../types";

export const EMPTY_VACANCY = {
  _id: undefined,
  company: "",
  note: "",
  salary: 0,
  status: "Accept" as TStatus,
  vacancy: "",
};

export const ALERT_STATUS = {
  create: "Vacancy created!",
  update: "Vacancy updated!",
  delete: "Vacancy deleted!",
};
