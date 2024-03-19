import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CarsList } from "components";
import { selectAllCars } from "../../reduxState/selector";
import { apiGetCars } from "../../reduxState/operations";

const Catalog = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectAllCars);

  useEffect(() => {
    dispatch(apiGetCars());
  }, [dispatch]);

  return <div>{cars && <CarsList cars={cars} />}</div>;
};
export default Catalog;
