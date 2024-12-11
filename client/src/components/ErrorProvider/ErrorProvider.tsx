import { createContext, useEffect, useState } from "react";

export const ErrorContext = createContext<{
  error: string;
  setError: React.Dispatch<React.SetStateAction<string>>;
}>({ error: "", setError: () => "" });

export const ErrorProvider = ({ children }) => {
  const [error, setError] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => setError(""), 3000);
    return () => clearTimeout(timeout);
  }, [error]);

  return (
    <ErrorContext.Provider value={{ error, setError }}>
      {children}
    </ErrorContext.Provider>
  );
};
