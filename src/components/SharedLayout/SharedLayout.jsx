import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Loader } from "components";
import css from "./SharedLayout.styled.module.css";

export const SharedLayout = () => {
  return (
    <div>
      <header className={css.header}>
        <nav className={css.header__navi}>
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/cars"}>Catalog</NavLink>
          <NavLink to={"/favorites"}>Favorites</NavLink>
        </nav>
      </header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
