import type { Url } from "@/utils/types";

export default interface Character {
	id: number;
	name: string;
	status: CharacterStatus;
	species: string;
	type: string;
	gender: CharacterGender;
	origin: {
		name: string;
		url: Url;
	};
	location: {
		name: string;
		url: Url;
	};
	image: Url;
	episode: Url[];
	url: Url;
	created: string;
}

export type CharacterStatus = "Alive" | "Dead" | "unknown";

export type CharacterGender = "Female" | "Male" | "Genderless" | "unknown";
