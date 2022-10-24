import Character from "@/models/character";
import { Url } from "@/utils/types";

export default interface GetCharactersResponse {
	info: {
		count: number;
		pages: number;
		prev: Url | null;
		next: Url | null;
	};
	results: Character[];
}
