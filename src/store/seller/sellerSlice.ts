import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Seller } from "../../interfaces";

export const sellerSlice = createSlice({
  name: "seller",
  initialState: [] as Seller[],
  reducers: {
    addSeller: (state, action: PayloadAction<Seller>) => {
      state.push(action.payload);
    },
    // setSellerInfo: (
    //   state,
    //   action: PayloadAction<{ index: number; name: string; rut: string }>
    // ) => {
    //   const { index, name, rut } = action.payload;
    //   state[index].name = name;
    //   state[index].rut = rut;
    // },
    // setVehicleInfo: (
    //   state,
    //   action: PayloadAction<{ index: number; vehicle: Vehicle }>
    // ) => {
    //   const { index, vehicle } = action.payload;
    //   state[index].vehicle = vehicle;
    // },
    getSellers: (state) => state,
  },
});

// Action creators are generated for each case reducer function
// export const { addSeller, setSellerInfo, setVehicleInfo } = sellerSlice.actions;
export const { addSeller, getSellers } = sellerSlice.actions;
