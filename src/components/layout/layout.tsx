import { Sidebar } from "./sidebar/sidebar";
import { Outlet } from "react-router-dom";
import style from "./layout.module.scss";

export const Layout = () => {
  return (
    <article className={style.app}>
      <Sidebar />
      <Outlet />
    </article>
  );
};
