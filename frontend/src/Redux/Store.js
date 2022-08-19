import { configureStore } from "@reduxjs/toolkit";
import RootReducer from "./Reducers/RootReducer";

export const Store=configureStore({reducer:RootReducer});