import { createSlice } from "@reduxjs/toolkit";

export const ServiceSlice = createSlice({
  name: "auth",
  initialState: {
    services: [],

  },
  reducers: {
    setServices: (state, action) => {
      state.services = action.payload.services;

    },
  }
});

export const { setServices } = ServiceSlice.actions;

export const getServices = (state) => state.services.services;

export default ServiceSlice.reducer;