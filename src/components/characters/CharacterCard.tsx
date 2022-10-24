import Character from "@/models/character";
import "./CharacterCard.css";

interface Props {
	character: Character;
}

export default function CharacterCard({ character }: Props) {
	return (
		<div className="character-card">
			<span>
				({character.id}) {character.name}
			</span>
		</div>
	);
}
