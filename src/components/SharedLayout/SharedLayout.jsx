import Home from "../../pages/Home/Home";
import Catalog from "../../pages/Catalog/Catalog";
import Favorites from "../../pages/Favorites/Favorites";
import css from "./SharedLayout.styled.module.css";

export const SharedLayout = () => {
  return (
    <div className={css.container}>
      <Home />
      <Catalog />
      <Favorites />
    </div>
  );
};
