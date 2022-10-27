import type Character from "@/models/character";
import cn from "@/utils/classNamesHelper";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./CharacterCard.css";

interface Props {
	character: Character;
	className?: string;
}

export default function CharacterCard({ character, className }: Props) {
	// https://www.w3schools.com/howto/howto_css_flip_card.asp

	const [isFlipped, setIsFlipped] = useState(false);

	const flipCard = () => {
		setIsFlipped((isFlipped) => !isFlipped);
	};

	return (
		<div
			className={cn(
				"character-card",
				isFlipped && "character-card--flipped",
				className
			)}
			onClick={flipCard}
		>
			<div className="character-card__inner">
				<div className="character-card__front skeleton">
					<img
						className="character-card__img"
						src={character.image}
						alt={character.name}
					/>
				</div>
				<div className="character-card__back">
					<h2 className="character-card__name">{character.name}</h2>
					<Link
						className="character-card__details-btn btn btn--purple"
						to={`/characters/${character.id}`}
					>
						See Details
					</Link>
				</div>
			</div>
		</div>
	);
}
