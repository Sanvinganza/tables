import { TEmptyVacancy, TVacancy } from "./types";

export const getVacancies = () =>
  fetch(import.meta.env.VITE_SERVER_URL + "/api").then((response) =>
    response.json()
  );

export const createVacancy = (data: TEmptyVacancy) =>
  fetch(import.meta.env.VITE_SERVER_URL + "/api/create", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

export const updateVacancy = (data: TVacancy) =>
  fetch(import.meta.env.VITE_SERVER_URL + "/api/update", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

export const deleteVacancy = (_id: string) =>
  fetch(import.meta.env.VITE_SERVER_URL + "/api/delete", {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ _id: _id }),
  });
