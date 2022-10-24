import CharacterCard from "@/components/characters/CharacterCard";
import Character from "@/models/character";
// import "./CharacterCardGrid.css";

interface Props {
	characters: Character[];
}

export default function CharacterCardGrid({ characters }: Props) {
	return (
		<div className="character-card-grid">
			{characters.map((character) => (
				<CharacterCard key={character.id} character={character} />
			))}
		</div>
	);
}
