import { characters } from "@/data/mockData";
import CharacterService from "@/services/characterService";
import "@testing-library/jest-dom";

jest.mock("@/services/characterService");
jest.mocked(CharacterService.getAll).mockResolvedValue(characters);
jest
	.mocked(CharacterService.getById)
	.mockImplementation(
		async (characterId) => characters.find((c) => c.id === characterId)!
	);
