import { configureStore } from "@reduxjs/toolkit";
import { apiSliceReducer } from "./apiSlice";

export const store = configureStore({
	reducer: {
		apiSlice: apiSliceReducer,
	},
});

export type StoreState = ReturnType<typeof store.getState>;
export type StoreDispatch = typeof store.dispatch;
