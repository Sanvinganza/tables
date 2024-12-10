import { useMutation, useQueryClient } from "react-query";
import { TEmptyVacancy, TVacancy } from "../../types";
import { createVacancy, deleteVacancy, updateVacancy } from "../../api";

export const useDeleteVacancy = (_id: string) => {
  const queryClient = useQueryClient();

  const { mutate, error, isLoading } = useMutation(
    (_id: string) => deleteVacancy(_id),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("vacancies");
      },
    }
  );

  return {
    deleteVacancy: mutate,
    deleteError: error,
    isVacancyDeleting: isLoading,
  };
};

export const useUpdateVacancy = () => {
  const queryClient = useQueryClient();
  const { mutate, error, isLoading } = useMutation(
    (newVacancy: TVacancy) => updateVacancy(newVacancy),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("vacancies");
      },
    }
  );

  return {
    updateVacancy: mutate,
    updateError: error,
    isVacancyUpdating: isLoading,
  };
};

export const useCreateVacancy = () => {
  const queryClient = useQueryClient();
  const { mutate, error, isLoading } = useMutation(
    (newVacancy: TEmptyVacancy) => createVacancy(newVacancy),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("vacancies");
      },
    }
  );

  return {
    createVacancy: mutate,
    createError: error,
    isVacancyCreating: isLoading,
  };
};
