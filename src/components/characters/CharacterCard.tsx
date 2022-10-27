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
	const [isFlipped, setIsFlipped] = useState(false);

	const flipCard = () => {
		setIsFlipped((isFlipped) => !isFlipped);
	};

	return (
		<div className={cn("character-card", className)} onClick={flipCard}>
			<div
				className={cn("character-card__front", isFlipped && "d-none")}
				style={{ display: isFlipped ? "none" : "block" }}
			>
				<img
					className="character-card__img"
					src={character.image}
					alt={character.name}
				/>
			</div>
			<div className={cn("character-card__back", !isFlipped && "d-none")}>
				<h2 className="character-card__name">{character.name}</h2>
				<Link
					className="character-card__details-btn btn btn--purple"
					to={`/characters/${character.id}`}
				>
					See Details
				</Link>
			</div>
		</div>
	);
}
