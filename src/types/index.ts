export type BillingType = "monthly" | "yearly";

export type PlanType = "arcade" | "advanced" | "pro";
export type PlansType = { name: PlanType; price: number }[];
export type SelectedPlanType =
  | { name: PlanType; price: number }
  | { name: ""; price: 0 };

export type AddonType =
  | "Online service"
  | "Larger storage"
  | "Customizable profile";

export type AddonsType = {
  title: AddonType;
  description: string;
  price: number;
}[];

export type SelectedAddonType = { name: AddonType; price: number };

export interface FormType {
  name: string;
  email: string;
  phone: string;
}

export interface InitialState {
  form: FormType;
  selectedPlan: SelectedPlanType;
  selectedAddons: SelectedAddonType[];
  selectedBillingType: BillingType;
}
