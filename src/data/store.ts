import { configureStore } from "@reduxjs/toolkit";
import { apiSliceReducer } from "./apiSlice";
import { uiSliceReducer } from "./uiSlice";

export const store = configureStore({
	reducer: {
		apiSlice: apiSliceReducer,
		uiSlice: uiSliceReducer,
	},
});

export type StoreState = ReturnType<typeof store.getState>;
export type StoreDispatch = typeof store.dispatch;
