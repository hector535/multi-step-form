import { createContext } from "react";
import {
  BillingType,
  FormType,
  InitialState,
  SelectedAddonType,
  SelectedPlanType,
} from "@/types";

type ContextType = InitialState & {
  setForm: (p: FormType) => void;
  setPlan: (p: SelectedPlanType) => void;
  setAddons: (p: SelectedAddonType[]) => void;
  setBillingType: (p: BillingType) => void;
};

export const AppContext = createContext<ContextType | null>(null);
