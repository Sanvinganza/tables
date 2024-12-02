import { TVacancy } from "../../src/types";
import { Vacancy } from "../model/schema";

export async function createVacancy(data: TVacancy) {
  try {
    const newVacancy = await Vacancy.create(data);
    return {
      status: "Success",
      data: newVacancy,
    };
  } catch (error) {
    return {
      status: "Failed",
      message: error,
    };
  }
}

export async function getVacancies() {
  try {
    const vacancies = await Vacancy.find({});
    return vacancies;
  } catch (error) {
    return {
      status: "Failed",
      message: error,
    };
  }
}

export async function updateVacancy(id: string, data: any) {
  try {
    const vacancy = await Vacancy.findByIdAndUpdate({ _id: id }, data, {
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
  } catch (error) {
    return {
      status: "Failed",
      data: error,
    };
  }
}

export async function deleteVacancy(id: string) {
  try {
    const vacancy = await Vacancy.findByIdAndDelete({ _id: id });
    if (!vacancy) {
      return {
        status: "Failed",
        message: "Post not available",
      };
    } else {
      return {
        status: "Success",
        message: vacancy,
      };
    }
  } catch (error) {
    return {
      status: "Failed",
      message: error,
    };
  }
}
