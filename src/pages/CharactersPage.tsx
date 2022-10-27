import CharacterCardGrid from "@/components/characters/CharacterCardGrid";
import MainLayout from "@/components/layout/MainLayout";
import MyIcon from "@/components/ui/MyIcon";
import SearchBox from "@/components/ui/SearchBox";
import { fetchCharactersNextPage } from "@/data/apiSlice";
import type { StoreDispatch, StoreState } from "@/data/store";
import { setCharactersSearchQuery } from "@/data/uiSlice";
import { mdiLoading } from "@mdi/js";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./CharactersPage.css";

export default function CharactersPage() {
	const characters = useSelector(
		(state: StoreState) => state.apiSlice.characters.paginated.data
	);
	const isFetchingCharacters = useSelector(
		(state: StoreState) => state.apiSlice.characters.paginated.isFetching
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
					{isFetchingCharacters && (
						<MyIcon className="btn-icon" path={mdiLoading} spin={true} />
					)}
					<span>Load more</span>
				</button>
			</div>
		</MainLayout>
	);
}
