import { configureStore } from "@reduxjs/toolkit";
import { sellerSlice } from "./seller/sellerSlice";
import { vehiculeInfoSlice } from "./seller/vehiculeInfoSlice";

export const store = configureStore({
  reducer: {
    seller: sellerSlice.reducer,
    vehiculesInfo: vehiculeInfoSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
