import CharacterCard from "@/components/characters/CharacterCard";
import { fetchCharactersNextPage } from "@/data/apiSlice";
import { StoreDispatch } from "@/data/store";
import type Character from "@/models/character";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import "./CharacterCardGrid.css";

interface Props {
	characters: Character[];
}

export default function CharacterCardGrid({ characters }: Props) {
	const gridRef = useRef<HTMLDivElement | null>(null);
	const dispatch = useDispatch<StoreDispatch>();

	const loadMore = async () => {
		await dispatch(fetchCharactersNextPage());
	};

	// https://stackoverflow.com/a/45586395/19206552
	const trackScroll = () => {
		const el = gridRef.current;
		if (el) {
			if (el.getBoundingClientRect().bottom <= window.innerHeight) {
				loadMore();
			}
		}
	};

	useEffect(() => {
		document.addEventListener("scroll", trackScroll);
		return () => {
			document.removeEventListener("scroll", trackScroll);
		};
	}, []);

	return (
		<div className="character-card-grid" ref={gridRef}>
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
