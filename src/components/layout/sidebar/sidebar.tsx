import { Navbar } from "./navbar/navbar";

import style from "./sidebar.module.scss";

export const Sidebar = () => {
  return (
    <section className={style.sidebar}>
      <Navbar />
    </section>
  );
};
