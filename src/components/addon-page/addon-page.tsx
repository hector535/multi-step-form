import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AddonsType, SelectedAddonType } from "@/types";
import { useAppContext } from "@/hooks/useAppContext";
import { formSchema, planSchema } from "@/lib/zod/schemas";
import { NavigationControls } from "@/components/navigation-controls/navigation-controls";
import { Container } from "@/components/container/container";
import { Addon } from "./addon/addon";

import style from "./addon-page.module.scss";

const addons: AddonsType = [
  {
    title: "Online service",
    description: "Access to multiplayer games",
    price: 1,
  },
  {
    title: "Larger storage",
    description: "Extra 1TB of cloud save",
    price: 2,
  },
  {
    title: "Customizable profile",
    description: "Custom theme on your profile",
    price: 2,
  },
];

export const AddonPage = () => {
  const navigate = useNavigate();
  const {
    form,
    selectedPlan,
    selectedBillingType,
    selectedAddons,
    setAddons: setAddonsContext,
  } = useAppContext();

  const [addedAddons, setAddedAddons] =
    useState<SelectedAddonType[]>(selectedAddons);

  const handleNextClick = () => {
    if (addedAddons.length) {
      setAddonsContext(addedAddons);
    }
    navigate("/confirm");
  };

  const handleBackClick = () => {
    navigate("/plan");
  };

  const handleClickAddon = (addon: SelectedAddonType) => {
    if (addedAddons.some((a) => a.name === addon.name)) {
      setAddedAddons(addedAddons.filter((v) => v.name !== addon.name));
      return;
    }

    setAddedAddons([...addedAddons, addon]);
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
      <h1 className="title">Pick add-ons</h1>
      <p className="description">
        Add-ons help enhance your gaming experience.
      </p>

      <div className={style.addons_container}>
        {addons.map((a) => (
          <Addon
            key={a.title}
            title={a.title}
            description={a.description}
            price={selectedBillingType === "monthly" ? a.price : a.price * 10}
            billingType={selectedBillingType}
            selected={addedAddons.some((added) => added.name === a.title)}
            onClick={() => handleClickAddon({ name: a.title, price: a.price })}
          />
        ))}
      </div>

      <NavigationControls
        onBackClick={handleBackClick}
        onNextClick={handleNextClick}
      />
    </Container>
  );
};
