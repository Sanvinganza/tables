import { useContext } from "react";
import { ErrorContext } from "./ErrorProvider";

export const useErrorProvider = () => useContext(ErrorContext);
