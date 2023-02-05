import { BillingType } from "@/types";
import style from "./selected-addon.module.scss";

type Props = {
  description: string;
  price: number;
  billingType: BillingType;
};

export const SelectedAddon = ({ description, price, billingType }: Props) => {
  return (
    <div className={style.selected_feature}>
      <p className={style.description}>{description}</p>
      <span className={style.price}>
        +${price}/{billingType === "monthly" ? "mo" : "yr"}
      </span>
    </div>
  );
};
