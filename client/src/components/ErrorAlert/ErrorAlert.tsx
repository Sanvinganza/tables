import { AlertUI } from "../../UI/AlertUI";
import { useErrorProvider } from "../ErrorProvider/hooks";

const ErrorAlert = () => {
  const { error } = useErrorProvider();
  return error ? <AlertUI text={error} status={"error"} /> : null;
};

export default ErrorAlert;
