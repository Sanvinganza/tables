import { TVacancy } from "./types";

export const getVacancies = () =>
  fetch(import.meta.env.VITE_SERVER_URL + "/api").then((response) =>
    response.json()
  );

export const createVacancy = (data: TVacancy) =>
  fetch(import.meta.env.VITE_SERVER_URL + "/api/create", {
    method: "POST",
    body: JSON.stringify(data),
  });

export const updateVacancy = (data: TVacancy & { id: string }) =>
  fetch(import.meta.env.VITE_SERVER_URL + "api/update", {
    method: "POST",
    body: JSON.stringify(data),
  });

export const deleteVacancy = (id: string) =>
  fetch(import.meta.env.VITE_SERVER_URL + "api/delete", {
    method: "DELETE",
    body: JSON.stringify(id),
  });
