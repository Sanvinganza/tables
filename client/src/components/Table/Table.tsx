import { useState } from "react";
import Modal from "../Modal/Modal";
import { TEmptyVacancy, TVacancy } from "../../types";
import { EMPTY_VACANCY } from "../constant";
import { TableUI } from "../../UI/TableUI";
import { useGetVacancy } from "./hooks";

export default function Table() {
  const { isLoadingVacancy, vacanciesError, vacancies } = useGetVacancy();

  const [currentVacancy, setCurrentVacancy] = useState<
    TVacancy | TEmptyVacancy | null
  >(null);

  const onClickVacancy = (data: TVacancy) => {
    setCurrentVacancy(data);
  };

  const onClickCreateVacancy = () => {
    setCurrentVacancy(EMPTY_VACANCY);
  };

  const handleClose = () => {
    setCurrentVacancy(null);
  };

  return (
    <>
      <TableUI
        isLoadingVacancy={isLoadingVacancy}
        onClickCreateVacancy={onClickCreateVacancy}
        onClickVacancy={onClickVacancy}
        vacancies={vacancies}
      />
      {currentVacancy ? (
        <Modal data={currentVacancy} handleClose={handleClose} />
      ) : null}
    </>
  );
}
