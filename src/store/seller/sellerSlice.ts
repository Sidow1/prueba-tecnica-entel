import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Seller } from "../../interfaces";
import { mockData } from "../../helpers/mockData";

export const sellerSlice = createSlice({
  name: "seller",
  initialState: mockData as unknown as Seller[],
  reducers: {
    addSeller: (state, action: PayloadAction<Seller>) => {
      state.push(action.payload);
    },
    getSellers: (state) => state,
    deleteSeller: (state, action: PayloadAction<string>) => {
      return state.filter((item) => item.vehicle.id !== action.payload);
    },
  },
});

export const { addSeller, getSellers, deleteSeller } = sellerSlice.actions;
