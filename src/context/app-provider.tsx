import { useEffect, useReducer } from "react";
import { AppContext } from "./app-context";
import { appReducer } from "./app-reducer";
import {
  BillingType,
  FormType,
  InitialState,
  SelectedAddonType,
  SelectedPlanType,
} from "@/types";
import { billingTypeSchema, formSchema, planSchema } from "@/lib/zod/schemas";

const getInitialState = () => {
  const initalState = {
    form: {
      name: "",
      email: "",
      phone: "",
    },
    selectedBillingType: "monthly",
    selectedPlan: { name: "", price: 0 },
    selectedAddons: [] as SelectedAddonType[],
  } as InitialState;

  let lsData = (localStorage.getItem("context") &&
    JSON.parse(localStorage.getItem("context")!)) as InitialState;

  if (lsData) {
    const { success: isValidBillingType } = billingTypeSchema.safeParse(
      lsData.selectedBillingType
    );
    const { success: isValidForm } = formSchema.safeParse(lsData.form);
    const { success: isValidPlan } = planSchema.safeParse(lsData.selectedPlan);

    if (!isValidBillingType) {
      lsData.selectedBillingType = initalState.selectedBillingType;
    }

    if (!isValidForm) {
      lsData.form = initalState.form;
    }

    if (!isValidPlan) {
      lsData.selectedPlan = initalState.selectedPlan;
    }

    if (!lsData.selectedAddons || !Array.isArray(lsData.selectedAddons)) {
      lsData.selectedAddons = initalState.selectedAddons;
    }

    return lsData;
  }

  return initalState;
};

const initialState: InitialState = getInitialState();

type Props = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const setForm = (form: FormType) => {
    dispatch({ type: "SET FORM", payload: form });
  };

  const setPlan = (plan: SelectedPlanType) => {
    dispatch({ type: "SET PLAN", payload: plan });
  };

  const setAddons = (addons: SelectedAddonType[]) => {
    dispatch({ type: "SET ADDONS", payload: addons });
  };

  const setBillingType = (billingType: BillingType) => {
    dispatch({ type: "SET BILLING TYPE", payload: billingType });
  };

  useEffect(() => {
    localStorage.setItem("context", JSON.stringify(state));
  }, [state]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        setForm,
        setPlan,
        setAddons,
        setBillingType,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
