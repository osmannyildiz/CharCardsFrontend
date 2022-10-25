import type Character from "@/models/character";
import CharacterService from "@/services/characterService";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { StoreState } from "./store";

export interface ApiSliceState {
	characters: {
		paginated: {
			data: Character[];
			isFetching: boolean;
			fetchError: string | null;
			lastFetchedPage: number;
		};
		individual: {
			data: {
				[key: number]: Character;
			};
			isFetching: boolean;
			fetchError: string | null;
			_beingFetchedIds: number[];
		};
	};
}

const initialState: ApiSliceState = {
	characters: {
		paginated: {
			data: [],
			isFetching: false,
			fetchError: null,
			lastFetchedPage: 0,
		},
		individual: {
			data: {},
			isFetching: false,
			fetchError: null,
			_beingFetchedIds: [],
		},
	},
};

export const apiSlice = createSlice({
	name: "api",
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(fetchCharactersNextPage.pending, (state) => {
				state.characters.paginated.isFetching = true;
			})
			.addCase(fetchCharactersNextPage.fulfilled, (state, action) => {
				state.characters.paginated.isFetching = false;

				state.characters.paginated.data =
					state.characters.paginated.data.concat(action.payload);
				state.characters.paginated.lastFetchedPage++;
			})
			.addCase(fetchCharactersNextPage.rejected, (state, action) => {
				state.characters.paginated.isFetching = false;

				state.characters.paginated.fetchError =
					action.error.message || "An unknown error occurred.";
				throw action.error; // TODO
			})
			.addCase(fetchCharacterById.pending, (state, action) => {
				state.characters.individual.isFetching = true;
				state.characters.individual._beingFetchedIds.push(action.meta.arg);
			})
			.addCase(fetchCharacterById.fulfilled, (state, action) => {
				state.characters.individual.isFetching = false;
				state.characters.individual._beingFetchedIds =
					state.characters.individual._beingFetchedIds.filter(
						(cid) => cid !== action.meta.arg
					);

				state.characters.individual.data[action.meta.arg] = action.payload;
			})
			.addCase(fetchCharacterById.rejected, (state, action) => {
				state.characters.individual.isFetching = false;
				state.characters.individual._beingFetchedIds =
					state.characters.individual._beingFetchedIds.filter(
						(cid) => cid !== action.meta.arg
					);

				state.characters.individual.fetchError =
					action.error.message || "An unknown error occurred.";
				throw action.error; // TODO
			});
	},
});

export const fetchCharactersNextPage = createAsyncThunk<
	Character[],
	void,
	{ state: StoreState }
>(
	"api/fetchCharactersNextPage",
	async (_, { getState }) => {
		// await new Promise((resolve, reject) => {
		// 	setTimeout(resolve, 5000);
		// });
		const { apiSlice } = getState();
		const lastFetchedPage = apiSlice.characters.paginated.lastFetchedPage;
		const fetchedCharacters = await CharacterService.getAll(
			lastFetchedPage + 1
		);
		return fetchedCharacters;
	},
	{
		condition: (_, { getState }) => {
			const { apiSlice } = getState();
			if (apiSlice.characters.paginated.isFetching) {
				return false;
			}
		},
	}
);

export const fetchCharacterById = createAsyncThunk<
	Character,
	number,
	{ state: StoreState }
>(
	"api/fetchCharacterById",
	async (characterId, { getState }) => {
		// await new Promise((resolve, reject) => {
		// 	setTimeout(resolve, 5000);
		// });
		const { apiSlice } = getState();

		const characterFromPaginated = apiSlice.characters.paginated.data.find(
			(character) => character.id === characterId
		);
		if (characterFromPaginated) {
			console.info("hey found it");
			return characterFromPaginated;
		}

		const fetchedCharacter = await CharacterService.getById(characterId);
		console.info("hey fetched it");
		return fetchedCharacter;
	},
	{
		condition: (characterId, { getState }) => {
			const { apiSlice } = getState();
			if (
				apiSlice.characters.individual.data[characterId] ||
				apiSlice.characters.individual._beingFetchedIds.includes(characterId)
			) {
				console.info("hey already have it");
				return false;
			}
		},
	}
);

export const apiSliceReducer = apiSlice.reducer;
// export const { increment, decrement, incrementByAmount } = apiSlice.actions;
