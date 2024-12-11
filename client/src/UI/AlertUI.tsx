import { Alert } from "@mui/material";

type AlertUIProps = {
  text: string;
  status?: "error" | "success";
};

export const AlertUI = ({ text, status = "success" }: AlertUIProps) => {
  return (
    <Alert sx={{ position: "absolute", bottom: "10px" }} severity={status}>
      {text}
    </Alert>
  );
};
