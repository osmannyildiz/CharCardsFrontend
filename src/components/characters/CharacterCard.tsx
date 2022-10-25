import type Character from "@/models/character";
import { Link } from "react-router-dom";
import "./CharacterCard.css";

interface Props {
	character: Character;
}

export default function CharacterCard({ character }: Props) {
	return (
		<Link className="character-card" to={`/characters/${character.id}`}>
			<span>
				({character.id}) {character.name}
			</span>
		</Link>
	);
}
