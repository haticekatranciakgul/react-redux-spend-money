import { configureStore } from "@reduxjs/toolkit";
import money from './Money/MoneySlice'; 



export const store = configureStore({
  reducer: {
    money,

  },
});