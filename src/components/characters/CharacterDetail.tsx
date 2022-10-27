import DecorativeTitle from "@/components/ui/DecorativeTitle";
import type Character from "@/models/character";
import { mdiGenderFemale, mdiGenderMale } from "@mdi/js";
import MyIcon from "../ui/MyIcon";
import "./CharacterDetail.css";

interface Props {
	character: Character;
}

export default function CharacterDetail({ character }: Props) {
	let genderIcon;
	switch (character.gender) {
		case "Female":
			genderIcon = mdiGenderFemale;
			break;
		case "Male":
			genderIcon = mdiGenderMale;
			break;
		case "Genderless":
			genderIcon = null;
			break;
		case "unknown":
			genderIcon = null;
			break;
		default:
			throw new Error("Switch statement is not exhaustive.");
	}

	return (
		<div className="character-detail">
			<div className="character-detail__img-wrapper skeleton">
				<img
					className="character-detail__img"
					src={character.image}
					alt="Character image"
				/>
			</div>
			<DecorativeTitle className="character-detail__name">
				{character.name}
			</DecorativeTitle>
			<ul className="character-detail__list">
				<li className="character-detail__list-item">
					<span className="character-detail__list-item-key">Location:</span>
					<span className="character-detail__list-item-value">
						{character.location.name}
					</span>
				</li>
				<li className="character-detail__list-item">
					<span className="character-detail__list-item-key">Gender:</span>
					<span className="character-detail__list-item-value">
						{genderIcon && <MyIcon path={genderIcon} />} {character.gender}
					</span>
				</li>
			</ul>
		</div>
	);
}
