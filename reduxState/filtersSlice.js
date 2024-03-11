import { createSlice } from "@reduxjs/toolkit";

const initialFilters = {
  filter: "",
};

const filtersSlice = createSlice({
  name: "filter",
  initialState: initialFilters,
  reducers: {
    setFilter(state, { payload }) {
      state.filter = payload;
    },
  },
});

export const { setFilter } = filtersSlice.actions;
export const filterReduser = filtersSlice.reducer;
