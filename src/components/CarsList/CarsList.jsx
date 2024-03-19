import React from "react";
import { CarsListItem, Grid } from "components";

export const CarsList = ({ cars }) => {
  return (
    <Grid>
      {cars.map((car, i) => (
        <CarsListItem key={i} car={car} />
      ))}
    </Grid>
  );
};
