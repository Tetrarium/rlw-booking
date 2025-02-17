import { createContext, FC, PropsWithChildren, useContext, useState } from "react";

interface LoadingContextType {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}

const LoadingContext = createContext<LoadingContextType>({ isLoading: false, setIsLoading: () => { } });

export const useLoading = () => {
  const context = useContext(LoadingContext);

  // if (!context) {
  //   return null;
  // }

  return context;
};

export const LoadingProvider: FC<PropsWithChildren> = ({ children }) => {
  const [loading, setLoading] = useState(false);
  console.log(loading);

  const setIsLoading = (value: boolean) => {
    setLoading(value);
  };

  return (
    <LoadingContext.Provider value={{ isLoading: loading, setIsLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};