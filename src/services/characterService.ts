import GetCharacterResponse from "@/models/apiResponses/getCharacterResponse";
import GetCharactersResponse from "@/models/apiResponses/getCharactersResponse";
import type Character from "@/models/character";
import HttpClient from "@/utils/httpClient";

export default class CharacterService {
	static _endpoint = "https://rickandmortyapi.com/api/character";

	static async getAll(page: number): Promise<Character[]> {
		const resp = await HttpClient.get<GetCharactersResponse>(
			`${this._endpoint}?page=${page}`
		);
		return resp.results;
	}

	static async getById(characterId: number): Promise<Character> {
		const resp = await HttpClient.get<GetCharacterResponse>(
			`${this._endpoint}/${characterId}`
		);
		return resp;
	}
}
