import { TEmptyVacancy, TStatus, TVacancy } from "../../types";
import { ModalUI, TOnChangeTextField } from "../../UI/ModalUI";
import { AlertUI } from "../../UI/AlertUI";
import { useState } from "react";
import { useCreateVacancy, useDeleteVacancy, useUpdateVacancy } from "./hooks";

type IModalProps = {
  data: TVacancy | TEmptyVacancy;
  handleClose: () => void;
};

export default function Modal({ data, handleClose }: IModalProps) {
  const [company, setCompany] = useState<string>(data.company);
  const [note, setNote] = useState<string>(data.note);
  const [salary, setSalary] = useState<number>(data.salary);
  const [status, setStatus] = useState<TStatus>(data.status);
  const [vacancy, setVacancy] = useState<string>(data.vacancy);

  const [alertText, setAlertText] = useState<string>("");

  const { updateVacancy, updateError, isVacancyUpdating } = useUpdateVacancy();
  const { createVacancy, createError, isVacancyCreating } = useCreateVacancy();
  const { deleteVacancy, deleteError, isVacancyDeleting } = useDeleteVacancy(
    data["_id"]
  );

  const onClickDeleteVacancy = () => {
    if (data["_id"])
      deleteVacancy(data["_id"], {
        onSuccess() {
          handleClose();
        },
      });
  };

  const onChangeTextField: TOnChangeTextField = (event) => {
    const key = event.target.name;
    switch (key) {
      case "company":
        setCompany(event.target.value);
        break;
      case "note":
        setNote(event.target.value);
        break;
      case "salary":
        setSalary(+event.target.value);
        break;
      case "status":
        setStatus(event.target.value as TStatus);
        break;
      case "vacancy":
        setVacancy(event.target.value);
        break;
    }
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (data["_id"]) {
      updateVacancy(
        {
          _id: data["_id"] as string,
          company: company,
          note: note,
          salary: salary,
          status: status,
          vacancy: vacancy,
        },
        {
          onSuccess() {
            setAlertText("Vacancy updated!");
            handleClose();
          },
        }
      );
    } else {
      createVacancy(
        {
          company: company,
          note: note,
          salary: salary,
          status: status,
          vacancy: vacancy,
        },
        {
          onSuccess() {
            setAlertText("Vacancy created!");
            handleClose();
          },
        }
      );
    }
  };

  return (
    <>
      <ModalUI
        _id={data["_id"]}
        status={status}
        company={company}
        salary={salary}
        note={note}
        vacancy={vacancy}
        handleClose={handleClose}
        onChangeTextField={onChangeTextField}
        onClickDeleteVacancy={onClickDeleteVacancy}
        onSubmit={onSubmit}
        open={!!data}
      />
      {alertText ? <AlertUI status={"success"} text={alertText} /> : null}
    </>
  );
}
