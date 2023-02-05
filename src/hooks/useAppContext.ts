import { AppContext } from "@/context/app-context";
import { useContext } from "react";

export const useAppContext = () => {
  const appContext = useContext(AppContext);

  if (!appContext) {
    throw new Error(
      "useAppContext hook can only be used within <AppProvider></AppProvider>"
    );
  }

  return appContext;
};
