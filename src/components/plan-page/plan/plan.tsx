import { classnames } from "@/utility/classnames";
import { BillingType, PlanType } from "@/types";
import style from "./plan.module.scss";

type Props = {
  name: PlanType;
  billingType: BillingType;
  price: number;
  selected?: boolean;
  onClick: () => void;
};

export const Plan = ({
  name,
  billingType,
  price,
  selected,
  onClick,
}: Props) => {
  const planClasses = classnames(style.plan, {
    "is-selected": selected,
  });

  return (
    <div onClick={onClick} className={planClasses}>
      <img src={`/icon-${name}.svg`} alt="" />
      <div className={style.content}>
        <h2 className={style.title}>{name}</h2>
        <span className={style.price}>
          ${price}/{billingType === "monthly" ? "mo" : "yr"}
        </span>
        {billingType === "yearly" && (
          <p className={style.discount}>2 months free</p>
        )}
      </div>
    </div>
  );
};
