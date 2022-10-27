import DebugScreen from "@/components/util/DebugScreen";
import CharacterDetailPage from "@/pages/CharacterDetailPage";
import CharactersPage from "@/pages/CharactersPage";
import { Route, Routes } from "react-router-dom";
import "./App.css";

export default function App() {
	return (
		<div className="app">
			<div className="app__background"></div>
			<Routes>
				<Route path="/" element={<CharactersPage />} />
				<Route
					path="/characters/:characterId"
					element={<CharacterDetailPage />}
				/>
			</Routes>
			<DebugScreen />
		</div>
	);
}
