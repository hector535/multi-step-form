import { forwardRef } from "react";
import { UseFormRegister } from "react-hook-form/dist/types";
import { classnames } from "@/utility/classnames";
import { FormType } from "@/types";
import style from "./input-control.module.scss";

type Props = {
  label: string;
  type?: string;
  placeholder?: string;
  errorMessage?: string;
};

export const InputControl = forwardRef<
  HTMLInputElement,
  Props & ReturnType<UseFormRegister<FormType>>
>(
  (
    { label, type = "text", placeholder, errorMessage, onChange, onBlur, name },
    ref
  ) => {
    return (
      <div className={style.input_control}>
        <div className={style.label_container}>
          <label className={style.label}>{label}</label>
          {errorMessage && <span className={style.error}>{errorMessage}</span>}
        </div>

        <input
          className={classnames(style.input, {
            [style["input--error"]]: !!errorMessage,
          })}
          type={type}
          name={name}
          ref={ref}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          autoComplete="off"
        />
      </div>
    );
  }
);
