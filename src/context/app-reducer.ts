import {
  BillingType,
  FormType,
  InitialState,
  SelectedAddonType,
  SelectedPlanType,
} from "@/types";

type ActionType =
  | { type: "SET FORM"; payload: FormType }
  | { type: "SET PLAN"; payload: SelectedPlanType }
  | { type: "SET ADDONS"; payload: SelectedAddonType[] }
  | { type: "SET BILLING TYPE"; payload: BillingType };

export const appReducer = (
  state: InitialState,
  action: ActionType
): InitialState => {
  switch (action.type) {
    case "SET FORM":
      return { ...state, form: { ...action.payload } };

    case "SET PLAN":
      return { ...state, selectedPlan: { ...action.payload } };

    case "SET ADDONS":
      return {
        ...state,
        selectedAddons: action.payload.map((v) => ({ ...v })),
      };

    case "SET BILLING TYPE":
      return { ...state, selectedBillingType: action.payload };

    default:
      throw new Error("Invalid action's type");
  }
};
