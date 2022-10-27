import CharacterDetail from "@/components/characters/CharacterDetail";
import MainLayout from "@/components/layout/MainLayout";
import MyIcon from "@/components/ui/MyIcon";
import { fetchCharacterById } from "@/data/apiSlice";
import { StoreDispatch, StoreState } from "@/data/store";
import { mdiArrowLeft } from "@mdi/js";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import "./CharacterDetailPage.css";

export default function CharacterDetailPage() {
	const { characterId } = useParams();
	let character;
	const dispatch = useDispatch<StoreDispatch>();

	if (characterId) {
		character = useSelector(
			(state: StoreState) =>
				state.apiSlice.characters.individual.data[parseInt(characterId)]
		);
	}

	useEffect(() => {
		if (characterId) {
			dispatch(fetchCharacterById(parseInt(characterId)));
		}
	}, [characterId]);

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
			{character ? (
				<CharacterDetail character={character} />
			) : (
				<p>no character :(</p>
			)}
		</MainLayout>
	);
}
