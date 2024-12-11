import { useEffect, useState } from "react";
import Modal from "../Modal/Modal";
import { TEmptyVacancy, TVacancy } from "../../types";
import { EMPTY_VACANCY } from "../constant";
import { TableUI } from "../../UI/TableUI";
import { useGetVacancy } from "./hooks";
import { useErrorProvider } from "../ErrorProvider/hooks";
import { AlertUI } from "../../UI/AlertUI";

export default function Table() {
  const { isLoadingVacancy, vacanciesError, vacancies } = useGetVacancy();
  const [alertText, setAlertText] = useState<string>("");

  useEffect(() => {
    const timeout = setTimeout(() => setAlertText(""), 3000);
    return () => clearTimeout(timeout);
  }, [alertText]);

  useEffect(() => {
    if (vacanciesError) setError(vacanciesError.message);
  }, [vacanciesError]);

  const { setError } = useErrorProvider();

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
      {!isLoadingVacancy ? (
        <TableUI
          isLoadingVacancy={isLoadingVacancy}
          onClickCreateVacancy={onClickCreateVacancy}
          onClickVacancy={onClickVacancy}
          vacancies={vacancies}
        />
      ) : (
        "Loading..."
      )}
      {currentVacancy ? (
        <Modal
          data={currentVacancy}
          handleClose={handleClose}
          setAlertText={setAlertText}
        />
      ) : null}
      {alertText ? <AlertUI status={"success"} text={alertText} /> : null}
    </>
  );
}
