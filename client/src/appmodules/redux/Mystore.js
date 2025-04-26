import { configureStore } from "@reduxjs/toolkit";
import myactionslit from "./Myactionlist";

export const Mystorage = configureStore({
    reducer: {
       counter: myactionslit
    },
  })