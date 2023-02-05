import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { NavigationControls } from "@/components/navigation-controls/navigation-controls";
import { useAppContext } from "@/hooks/useAppContext";
import { formSchema, planSchema } from "@/lib/zod/schemas";

import { Container } from "@/components/container/container";
import { SelectedAddon } from "./selected-addon/selected-addon";
import { SelectedPlan } from "./selected-plan/selected-plan";

import style from "./confirm-page.module.scss";

export const ConfirmPage = () => {
  const navigate = useNavigate();
  const { form, selectedBillingType, selectedPlan, selectedAddons } =
    useAppContext();

  const total =
    selectedAddons.reduce((prev, current) => prev + current.price, 0) +
    selectedPlan.price;

  const handleNextClick = () => {
    navigate("/thanks");
  };

  const handleBackClick = () => {
    navigate("/add-on");
  };

  useEffect(() => {
    const { success: isValidForm } = formSchema.safeParse(form);
    const { success: isValidPlan } = planSchema.safeParse(selectedPlan);

    if (!isValidForm || !isValidPlan) {
      handleBackClick();
    }
  }, []);

  return (
    <Container>
      <h1 className="title">Finishing up</h1>
      <p className="description">
        Double-check everything looks OK before confirming.
      </p>

      <div className={style.selected_features}>
        <SelectedPlan
          name={selectedPlan.name}
          price={
            selectedBillingType === "monthly"
              ? selectedPlan.price
              : selectedPlan.price * 10
          }
          billingType={selectedBillingType}
        />

        {selectedAddons.map((a) => (
          <SelectedAddon
            key={a.name}
            description={a.name}
            price={selectedBillingType === "monthly" ? a.price : a.price * 10}
            billingType={selectedBillingType}
          />
        ))}
      </div>

      <div className={style.total_container}>
        <p className={style.total_label}>
          Total (per {selectedBillingType === "monthly" ? "month" : "year"})
        </p>
        <span className={style.total}>
          +${selectedBillingType === "monthly" ? total : total * 10}/
          {selectedBillingType === "monthly" ? "mo" : "yr"}
        </span>
      </div>

      <NavigationControls
        onBackClick={handleBackClick}
        onNextClick={handleNextClick}
      />
    </Container>
  );
};
