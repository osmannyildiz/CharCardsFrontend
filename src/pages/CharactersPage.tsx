import CharacterCardGrid from "@/components/characters/CharacterCardGrid";
import MainLayout from "@/components/layout/MainLayout";
import SearchBox from "@/components/ui/SearchBox";
import Character from "@/models/character";
import CharacterService from "@/services/characterService";
import { useEffect, useState } from "react";
// import "./CharactersPage.css";

export default function CharactersPage() {
	const [characters, setCharacters] = useState<Character[]>([]);
	const [lastLoadedPage, setLastLoadedPage] = useState(0);

	const loadMore = async () => {
		const newResults = await CharacterService.getAll(lastLoadedPage + 1);
		setCharacters((characters) => [...characters, ...newResults]);
		setLastLoadedPage((lastLoadedPage) => lastLoadedPage + 1);
	};

	let ignore = false;
	useEffect(() => {
		if (!ignore) {
			loadMore();
		}
		return () => {
			ignore = true;
		};
	}, []);

	return (
		<MainLayout mainClassName="characters-page" headerChildren={<SearchBox />}>
			<CharacterCardGrid characters={characters} />
			<button type="button" onClick={() => loadMore()}>
				Load More
			</button>
		</MainLayout>
	);
}
