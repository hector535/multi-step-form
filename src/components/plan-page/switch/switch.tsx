import style from "./switch.module.scss";

type Props = {
  value: boolean;
  onChange: (p: boolean) => void;
};

export const Switch = ({ value, onChange }: Props) => {
  return (
    <label className={style.switch}>
      <input
        className={style.checkbox}
        onChange={(e) => onChange(e.target.checked)}
        type="checkbox"
        checked={value}
      />
      <span className={style.thumb}></span>
    </label>
  );
};
