import style from "./checkbox.module.scss";

type Props = {
  checked?: boolean;
};

export const Checkbox = ({ checked }: Props) => {
  return (
    <label className={style.checkbox}>
      <input
        className={style.original}
        type="checkbox"
        checked={checked}
        onChange={() => {}}
      />
      <span className={style.custom}></span>
    </label>
  );
};
