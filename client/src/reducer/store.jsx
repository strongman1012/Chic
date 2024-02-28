import { configureStore } from "@reduxjs/toolkit";

import AuthSlice from "./AuthSlice";
import AuthenticationSlice from "./AuthenticationSlice";
import CategorySlice from "./CategorySlice";
import ServiceSlice from "./ServiceSlice";
import StaffSlice from "./StaffSlice";

export default configureStore({
  reducer: {
    auth: AuthSlice,
    authentication: AuthenticationSlice,
    categories: CategorySlice,
    services: ServiceSlice,
    staffs: StaffSlice
  }
});