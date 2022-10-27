import CharacterCard from "@/components/characters/CharacterCard";
import type Character from "@/models/character";
import "./CharacterCardGrid.css";

interface Props {
	characters: Character[];
}

export default function CharacterCardGrid({ characters }: Props) {
	return (
		<div className="character-card-grid">
			{characters.map((character) => (
				<CharacterCard
					key={character.id}
					className="character-card-grid__item"
					character={character}
				/>
			))}
		</div>
	);
}
