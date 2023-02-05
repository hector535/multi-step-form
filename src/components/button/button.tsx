import { classnames } from "@/utility/classnames";
import style from "./button.module.scss";

type Props = {
  type: "primary" | "secondary" | "link";
  disabled?: boolean;
  className?: string;
  idForm?: string;
  children: React.ReactNode;
  onClick?: () => void;
};

export const Button = ({
  type = "primary",
  className = "",
  disabled,
  idForm,
  children,
  onClick,
}: Props) => (
  <button
    className={classnames(style.button, className, style[type])}
    disabled={disabled}
    onClick={onClick}
    form={idForm}
  >
    {children}
  </button>
);
