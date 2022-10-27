import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UiSliceState {
	charactersSearchQuery: string;
}

const initialState: UiSliceState = {
	charactersSearchQuery: "",
};

export const uiSlice = createSlice({
	name: "ui",
	initialState,
	reducers: {
		setCharactersSearchQuery: (state, action: PayloadAction<string>) => {
			state.charactersSearchQuery = action.payload;
		},
	},
});

export const uiSliceReducer = uiSlice.reducer;
export const { setCharactersSearchQuery } = uiSlice.actions;
