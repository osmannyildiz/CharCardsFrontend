import CharacterCardGrid from "@/components/characters/CharacterCardGrid";
import MainLayout from "@/components/layout/MainLayout";
import SearchBox from "@/components/ui/SearchBox";
import { fetchCharactersNextPage } from "@/data/apiSlice";
import type { StoreDispatch, StoreState } from "@/data/store";
import { setCharactersSearchQuery } from "@/data/uiSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./CharactersPage.css";

export default function CharactersPage() {
	const characters = useSelector(
		(state: StoreState) => state.apiSlice.characters.paginated.data
	);
	const lastFetchedPage = useSelector(
		(state: StoreState) => state.apiSlice.characters.paginated.lastFetchedPage
	);
	const searchQuery = useSelector(
		(state: StoreState) => state.uiSlice.charactersSearchQuery
	);
	const dispatch = useDispatch<StoreDispatch>();

	const getGridCharacters = () => {
		if (searchQuery) {
			return characters.filter((character) =>
				character.name.toLowerCase().includes(searchQuery.toLowerCase())
			);
		} else {
			return characters;
		}
	};

	const loadMore = async () => {
		await dispatch(fetchCharactersNextPage());
	};

	useEffect(() => {
		if (lastFetchedPage === 0) {
			loadMore();
		}
	}, []);

	return (
		<MainLayout
			mainClassName="characters-page"
			headerChildren={
				<SearchBox
					className="characters-page__search-box"
					value={searchQuery}
					setValue={(value) => dispatch(setCharactersSearchQuery(value))}
					placeholder="Search characters..."
					align="center"
				/>
			}
		>
			<CharacterCardGrid characters={getGridCharacters()} />
			<div className="text-center">
				<button
					className="characters-page__load-more-btn btn btn--green"
					type="button"
					onClick={loadMore}
				>
					Load more
				</button>
			</div>
		</MainLayout>
	);
}
