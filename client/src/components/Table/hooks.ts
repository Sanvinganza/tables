import { useQuery } from "react-query";
import { TVacancy } from "../../types";
import { getVacancies } from "../../api";

export const useGetVacancy = () => {
  const { isLoading, error, data } = useQuery<TVacancy[], { message: string }>(
    "vacancies",
    getVacancies
  );

  return {
    isLoadingVacancy: isLoading,
    vacancies: data,
    vacanciesError: error,
  };
};
