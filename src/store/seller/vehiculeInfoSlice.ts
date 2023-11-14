import { createSlice } from "@reduxjs/toolkit";
import { Brand, BrandModelMapping } from "../../interfaces";

interface BrandModelState {
  brands: Brand[];
  brandModels: BrandModelMapping;
}

const initialState: BrandModelState = {
  brands: ["Ford", "Tesla", "Fiat", "Audi", "BMW"],
  brandModels: {
    Ford: ["C-Max", "Fiesta"],
    Tesla: ["Model S", "Model X"],
    Fiat: ["Freemont", "Panda"],
    Audi: ["A4", "A6"],
    BMW: ["X5", "X6"],
  },
};

export const vehiculeInfoSlice = createSlice({
  name: "vehiculeInfo",
  initialState,
  reducers: {
    // getBrandModels: (state, action: PayloadAction<{ brand: Brand }>) => {
    // },
  },
});

// Action creators are generated for each case reducer function
export const {} = vehiculeInfoSlice.actions;
