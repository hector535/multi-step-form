import { classnames } from "@/utility/classnames";
import style from "./container.module.scss";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export const Container = ({ children, className = "" }: Props) => (
  <section className={classnames(style.container, className)}>
    {children}
  </section>
);
