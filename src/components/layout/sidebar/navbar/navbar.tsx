import { useMatch } from "react-router-dom";
import { Step } from "./step/step";

import style from "./navbar.module.scss";

export const Navbar = () => {
  const isPersonalPage = Boolean(useMatch("/"));
  const isPlanPage = Boolean(useMatch("/plan"));
  const isAddonPage = Boolean(useMatch("/add-on"));
  const isConfirmPage = Boolean(useMatch("/confirm"));
  const isThanksPage = Boolean(useMatch("/thanks"));

  return (
    <nav className={style.nav}>
      <ol className={style.list}>
        <li className={style.item}>
          <Step index={1} title="Your info" to="/" active={isPersonalPage} />
        </li>
        <li>
          <Step index={2} title="Select plan" to="/plan" active={isPlanPage} />
        </li>
        <li>
          <Step index={3} title="Add-ons" to="/add-on" active={isAddonPage} />
        </li>
        <li>
          <Step
            index={4}
            title="Summary"
            to="/confirm"
            active={isConfirmPage || isThanksPage}
          />
        </li>
      </ol>
    </nav>
  );
};
