import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "@/components/container/container";
import { NavigationControls } from "@/components/navigation-controls/navigation-controls";
import { useAppContext } from "@/hooks/useAppContext";
import { BillingType, PlansType, SelectedPlanType } from "@/types";

import { Plan } from "./plan/plan";
import { Switch } from "./switch/switch";

import style from "./plan-page.module.scss";
import { formSchema } from "@/lib/zod/schemas";

const plans: PlansType = [
  {
    name: "arcade",
    price: 9,
  },
  {
    name: "advanced",
    price: 12,
  },
  {
    name: "pro",
    price: 15,
  },
];

export const PlanPage = () => {
  const navigate = useNavigate();

  const {
    form,
    selectedPlan,
    selectedBillingType,
    setPlan: setPlanContext,
    setBillingType: setBillingTypeContext,
  } = useAppContext();

  const [plan, setPlan] = useState<SelectedPlanType>(selectedPlan);
  const [billingType, setBillingType] =
    useState<BillingType>(selectedBillingType);

  const handleNextClick = () => {
    if (!plan) return;

    setPlanContext(plan);
    setBillingTypeContext(billingType);

    navigate("/add-on");
  };

  const handleBackClick = () => {
    navigate("/");
  };

  useEffect(() => {
    const { success } = formSchema.safeParse(form);

    if (!success) {
      handleBackClick();
    }
  }, []);

  return (
    <Container>
      <h1 className="title">Select your plan</h1>
      <p className="description">
        You have the option of monthly or yearly billing.
      </p>

      <div className={style.plans_container}>
        {plans.map((p) => (
          <Plan
            key={p.name}
            name={p.name}
            billingType={billingType}
            price={billingType === "monthly" ? p.price : p.price * 10}
            onClick={() => setPlan({ name: p.name, price: p.price })}
            selected={plan.name === p.name}
          />
        ))}
      </div>

      <div className={style.billing_type_container}>
        <span className={style.billing_label}>Monthly</span>
        <Switch
          value={billingType === "monthly" ? false : true}
          onChange={(value) => setBillingType(value ? "yearly" : "monthly")}
        />
        <span className={style.billing_label}>Yearly</span>
      </div>

      <NavigationControls
        onBackClick={handleBackClick}
        onNextClick={handleNextClick}
      />
    </Container>
  );
};
