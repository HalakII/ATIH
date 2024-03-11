import Home from "../../pages/Home/Home";
import Catalog from "../../pages/Catalog/Catalog";
import Favorites from "../../pages/Favorites/Favorites";
import css from "./SharedLayout.styled.module.css";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { apiGetCars } from "../../../reduxState/operations";
import { selectAllCars } from "../../../reduxState/selector";

export const SharedLayout = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectAllCars);

  useEffect(() => {
    dispatch(apiGetCars());
  }, [dispatch]);

  if (cars.length > 0) console.log(cars);

  return (
    <div className={css.container}>
      <Home />
      <Catalog />
      <Favorites />
    </div>
  );
};
