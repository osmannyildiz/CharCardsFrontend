import { store } from "@/data/store";
import CharacterDetailPage from "@/pages/CharacterDetailPage";
import CharactersPage from "@/pages/CharactersPage";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

export default function App() {
	return (
		<Provider store={store}>
			<BrowserRouter basename={import.meta.env.BASE_URL}>
				<div className="app">
					<div className="app__background"></div>
					<Routes>
						<Route path="/" element={<CharactersPage />} />
						<Route
							path="/characters/:characterId"
							element={<CharacterDetailPage />}
						/>
					</Routes>
					{/* <DebugScreen /> */}
				</div>
			</BrowserRouter>
		</Provider>
	);
}
