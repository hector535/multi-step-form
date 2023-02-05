import { BillingType } from "@/types";
import { Link } from "react-router-dom";
import style from "./selected-plan.module.scss";

type Props = {
  name: string;
  billingType: BillingType;
  price: number;
};

export const SelectedPlan = ({ name, billingType, price }: Props) => {
  return (
    <div className={style.selected_plan}>
      <div className={style.name_container}>
        <h2 className={style.name}>
          {name} ({billingType === "monthly" ? "Monthly" : "Yearly"})
        </h2>
        <Link className={style.link} to="/plan">
          Change
        </Link>
      </div>
      <span className={style.price}>
        ${price}/{billingType === "monthly" ? "mo" : "yr"}
      </span>
    </div>
  );
};
