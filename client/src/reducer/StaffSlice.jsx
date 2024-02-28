import { createSlice } from "@reduxjs/toolkit";

export const StaffSlice = createSlice({
  name: "auth",
  initialState: {
    staffs: [],

  },
  reducers: {
    setStaffs: (state, action) => {
      state.staffs = action.payload.staffs;

    },
  }
});

export const { setStaffs } = StaffSlice.actions;

export const getStaffs = (state) => state.staffs.staffs;

export default StaffSlice.reducer;