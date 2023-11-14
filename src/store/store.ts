import { configureStore } from "@reduxjs/toolkit";
import { sellerSlice } from "./seller/sellerSlice";
import { vehicleInfoSlice } from "./vehicle/vehicleInfoSlice";

export const store = configureStore({
  reducer: {
    seller: sellerSlice.reducer,
    vehiclesInfo: vehicleInfoSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
