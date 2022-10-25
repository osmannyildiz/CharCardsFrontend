import type Character from "@/models/character";
// import "./CharacterDetail.css";

interface Props {
	character: Character;
}

export default function CharacterDetail({ character }: Props) {
	return (
		<div className="character-detail">
			<p>Details of {character.name}</p>
		</div>
	);
}
