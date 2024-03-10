export const CarsListItem = () => {
  return (
    <div className="card">
      <img
        className="car_img"
        src="https://hips.hearstapps.com/hmg-prod/images/honda-prelude-concept-front-three-quarters-653927960f1f4.jpg?crop=1.00xw:0.920xh;0,0.0801xh&resize=980:*"
        alt="car image"
        width="469"
        height="314"
      />
      <button class="button_heart" type="button">
        <svg class="icon" width="18" height="18">
          <use href="/public/icons.svg#icon-normalheart"></use>
        </svg>
      </button>
      <div className="general_info box">
        <h3 className="car_title">
          {make} <span className="span_modal">{model}</span>, {year}
          <span className="span_modal">{price}</span>
        </h3>
        <ul className="info_car_list">
          <li className="info_car_item">{city}</li>
          <li className="info_car_item">{country}</li>
          <li className="info_car_item">id:{number}</li>
          <li className="info_car_item">Year:{value}</li>
          <li className="info_car_item">Type:{value}</li>
          <li className="info_car_item">Fuel Consumptiion:{value}</li>
          <li className="info_car_item">Engine Size: {value};</li>
        </ul>
      </div>
    </div>
  );
};
