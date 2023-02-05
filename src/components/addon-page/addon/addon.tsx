import { Checkbox } from "@/components/checkbox/checkbox";
import { BillingType } from "@/types";
import { classnames } from "@/utility/classnames";

import style from "./addon.module.scss";

type Props = {
  title: string;
  description: string;
  price: number;
  billingType: BillingType;
  selected?: boolean;
  onClick: () => void;
};

export const Addon = ({
  title,
  description,
  price,
  billingType,
  selected,
  onClick,
}: Props) => {
  const addonClasses = classnames(style.addon, {
    "is-selected": selected,
  });
  return (
    <div onClick={onClick} className={addonClasses}>
      <Checkbox checked={selected} />
      <div className={style.content}>
        <h2 className={style.title}>{title}</h2>
        <p className={style.description}>{description}</p>
      </div>
      <span className={style.price}>
        +${price}/{billingType === "monthly" ? "mo" : "yr"}
      </span>
    </div>
  );
};
