import DecorativeTitle from "@/components/ui/DecorativeTitle";
import type Character from "@/models/character";
import "./CharacterDetail.css";

interface Props {
	character: Character;
}

export default function CharacterDetail({ character }: Props) {
	return (
		<div className="character-detail">
			<img
				className="character-detail__img"
				src={character.image}
				alt="Character image"
			/>
			<DecorativeTitle className="character-detail__name">
				{character.name}
			</DecorativeTitle>
			<ul className="character-detail__ul">
				<li>
					<b>Location:</b> {character.location.name}
				</li>
				<li>
					<b>Gender:</b> {character.gender}
				</li>
			</ul>
		</div>
	);
}
