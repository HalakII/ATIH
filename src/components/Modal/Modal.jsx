import React from "react";

export default function Modal() {
  return (
    <div class="backdrop is-hidden" data-modal>
      <div class="modal_container">
        <button class="button_close" type="button" data-modal-close>
          <svg class="icon" width="12" height="12">
            <use href="./images/icons.svg#icon-xclose_btn"></use>
          </svg>
        </button>
        <div class="modal_card">
          <img
            class="car_img"
            src="https://hips.hearstapps.com/hmg-prod/images/honda-prelude-concept-front-three-quarters-653927960f1f4.jpg?crop=1.00xw:0.920xh;0,0.0801xh&resize=980:*"
            alt="car image"
            width="469"
            height="314"
          />
          <div class="general_info box">
            <h3 class="car_title">
              {make} <span class="span_modal">{model}</span>, {year}
            </h3>
            <ul class="info_car_list">
              <li class="info_car_item">{city}</li>
              <li class="info_car_item">{country}</li>
              <li class="info_car_item">id:{number}</li>
              <li class="info_car_item">Year:{value}</li>
              <li class="info_car_item">Type:{value}</li>
              <li class="info_car_item">Fuel Consumptiion:{value}</li>
              <li class="info_car_item">Engine Size: {value};</li>
            </ul>
            <p class="description_car">{descriptions}</p>
          </div>
          <div class="functionality_info box">
            <h4 class="info_title">Accessories and functionalities:</h4>
            <ul class="info_car_list">
              <li class="info_car_item">Leather seats</li>
              <li class="info_car_item">Panoramic sunroof</li>
              <li class="info_car_item">Power liftgate</li>
              <li class="info_car_item">Premium audio system</li>
              <li class="info_car_item">Remote start</li>
              <li class="info_car_item">Blind-spot monitoring</li>
            </ul>
          </div>
          <div class="condition_info">
            <h4 class="info_title">Rental Conditions:</h4>
            <ul class="condition_list">
              <li class="condition_item">
                Minimum age: <span class="span_modal">{value}</span>
              </li>
              <li class="condition_item">Valid driver`s license</li>
              <li class="condition_item">Security deposite required</li>
              <li class="condition_item">
                Mileage: <span class="span_modal">{value}</span>
              </li>
              <li class="condition_item">
                Price: <span class="span_modal">{value}</span>
              </li>
            </ul>
          </div>
        </div>
        <a class="contact_link" href="tel:+380730000000.">
          Rental car
        </a>
      </div>
    </div>
  );
}
