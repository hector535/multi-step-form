import { Button } from "@/components/button/button";
import { classnames } from "@/utility/classnames";
import { useMatch } from "react-router-dom";
import style from "./navigation-controls.module.scss";

type Props = {
  onBackClick?: () => void;
  onNextClick?: () => void;
  idForm?: string;
};

export const NavigationControls = ({
  onBackClick,
  onNextClick,
  idForm,
}: Props) => {
  const navigationControlsClasses = classnames(style.navigation_controls, {
    [style["navigation_controls--separate"]]: !!onBackClick,
  });

  const isConfirmPage = Boolean(useMatch("/confirm"));

  return (
    <div className={navigationControlsClasses}>
      {onBackClick && (
        <Button type="link" onClick={onBackClick}>
          Go Back
        </Button>
      )}

      <Button
        type={isConfirmPage ? "secondary" : "primary"}
        onClick={onNextClick}
        idForm={idForm}
      >
        {isConfirmPage ? "Confirm" : "Next Step"}
      </Button>
    </div>
  );
};
