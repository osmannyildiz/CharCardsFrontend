import CharacterDetail from "@/components/characters/CharacterDetail";
import MainLayout from "@/components/layout/MainLayout";
import DecorativeTitle from "@/components/ui/DecorativeTitle";
import MyIcon from "@/components/ui/MyIcon";
import { fetchCharacterById } from "@/data/apiSlice";
import type { StoreDispatch, StoreState } from "@/data/store";
import type { Children } from "@/utils/types";
import { mdiArrowLeft, mdiLoading } from "@mdi/js";
import { Icon } from "@mdi/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import "./CharacterDetailPage.css";

export default function CharacterDetailPage() {
	const { characterId } = useParams();
	let character, isFetching, fetchError;
	const dispatch = useDispatch<StoreDispatch>();

	if (characterId) {
		character = useSelector(
			(state: StoreState) =>
				state.apiSlice.characters.individual.data[parseInt(characterId)]
		);
		isFetching = useSelector(
			(state: StoreState) => state.apiSlice.characters.individual.isFetching
		);
		fetchError = useSelector(
			(state: StoreState) => state.apiSlice.characters.individual.fetchError
		);
	}

	useEffect(() => {
		if (characterId) {
			dispatch(fetchCharacterById(parseInt(characterId)));
		}
	}, [characterId]);

	let view: Children;
	if (character) {
		view = <CharacterDetail character={character} />;
	} else if (isFetching) {
		view = (
			<div className="text-center">
				<Icon
					className="character-detail-page__spinner"
					size="300px"
					path={mdiLoading}
					spin={true}
				/>
			</div>
		);
	} else {
		view = (
			<div className="text-center">
				<DecorativeTitle>Ooops!</DecorativeTitle>
				<p>{fetchError || "An unknown error occurred. That's weird."}</p>
			</div>
		);
	}

	return (
		<MainLayout
			mainClassName="character-detail-page"
			headerChildren={
				<div className="text-center">
					<Link
						className="character-detail-page__return-btn btn btn--green"
						to="/"
					>
						<MyIcon className="btn-icon" path={mdiArrowLeft} />
						<span>Back to characters</span>
					</Link>
				</div>
			}
		>
			{view}
		</MainLayout>
	);
}
