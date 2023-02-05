import { Link } from "react-router-dom";
import { classnames } from "@/utility/classnames";
import style from "./step.module.scss";

type Props = {
  to: string;
  index: number;
  title: string;
  active?: boolean;
};

export const Step = ({ to, index, title, active }: Props) => {
  const numberClasses = classnames(style.number, {
    [style["number--active"]]: active,
  });
  return (
    <Link className={style.step} to={to}>
      <span className={numberClasses}>{index}</span>
      <div className={style.content}>
        <p className={style.group}>Step {index}</p>
        <h2 className={style.title}>{title}</h2>
      </div>
    </Link>
  );
};
