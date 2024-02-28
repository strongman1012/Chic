import { createSlice } from "@reduxjs/toolkit";

export const CategorySlice = createSlice({
  name: "auth",
  initialState: {
    categories: [],

  },
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload.categories;

    },
  }
});

export const { setCategories } = CategorySlice.actions;

export const getCategories = (state) => state.categories.categories;

export default CategorySlice.reducer;