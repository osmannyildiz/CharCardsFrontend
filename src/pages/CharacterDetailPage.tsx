import CharacterDetail from "@/components/characters/CharacterDetail";
import MainLayout from "@/components/layout/MainLayout";
// import "./CharacterDetailPage.css";

export default function CharacterDetailPage() {
	const characterId = -1; // TODO Get from router
	const character = null; // TODO Get from store

	return (
		<MainLayout
			mainClassName="character-detail-page"
			headerChildren={<a href="#">Back to characters</a>}
		>
			<CharacterDetail character={character!} />
		</MainLayout>
	);
}
