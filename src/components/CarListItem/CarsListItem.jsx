import { Button } from "../Button/Button";
import css from "./CarsListItem.module.css";

export const CarsListItem = ({ car }) => {
  const [_, city, country] = car.address.split(",");

  return (
    <li className={css.card}>
      <img
        className={css.car_img}
        src={
          car.img ||
          "https://hips.hearstapps.com/hmg-prod/images/honda-prelude-concept-front-three-quarters-653927960f1f4.jpg?crop=1.00xw:0.920xh;0,0.0801xh&resize=980:*"
        }
        alt="car_image"
        width="469"
        height="314"
      />
      <button className={css.button_heart} type="button">
        <svg className={css.icon} width="18" height="18">
          <use href="/public/icons.svg#icon-normalheart"></use>
        </svg>
      </button>
      <div className={(css.general_info, css.box)}>
        <h3 className={css.car_title}>
          {car.make} <span className={css.span_modal}>{car.model}</span>,{" "}
          {car.year}
          <span className={css.span_modal}>{car.rentalPrice}</span>
        </h3>
        <ul className={css.info_car_list}>
          <li className={css.info_car_item}>{city}</li>
          <li className={css.info_car_item}>{country}</li>
          <li className={css.info_car_item}>id:{car.id}</li>
          <li className={css.info_car_item}>Year:{car.year}</li>
          <li className={css.info_car_item}>Type:{car.type}</li>
          <li className={css.info_car_item}>
            Fuel Consumptiion:{car.fuelConsumption}
          </li>
          <li className={css.info_car_item}>Engine Size: {car.engineSize};</li>
          <Button type="submit" width="274px">
            Learn more
          </Button>
        </ul>
      </div>
    </li>
  );
};
