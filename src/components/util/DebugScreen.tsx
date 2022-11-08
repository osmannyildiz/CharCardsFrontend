import { StoreState } from "@/data/store";
import cn from "@/utils/classNamesHelper";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./DebugScreen.css";

export default function DebugScreen() {
	const [isVisible, setIsVisible] = useState(false);

	const paginated_isFetching = useSelector(
		(state: StoreState) => state.apiSlice.characters.paginated.isFetching
	);
	const individual_isFetching = useSelector(
		(state: StoreState) => state.apiSlice.characters.individual.isFetching
	);
	const searchQuery = useSelector(
		(state: StoreState) => state.uiSlice.charactersSearchQuery
	);

	return (
		<div className={cn("debug-screen", !isVisible && "debug-screen--hidden")}>
			<div className="debug-screen__screen">
				<header className="debug-screen__header">
					<span>&gt;&gt;&gt; DEBUG SCREEN</span>
					<span
						className="debug-screen__hide-btn"
						onClick={() => setIsVisible(false)}
					>
						X
					</span>
				</header>
				<section className="debug-screen__content">
					<div>paginated.isFetching: {paginated_isFetching.toString()}</div>
					<div>individual.isFetching: {individual_isFetching.toString()}</div>
					<div>
						<Link to="/characters/42">see 42</Link>
					</div>
					<div>
						<Link to="/blah">404</Link>
					</div>
					<div>searchQuery: {searchQuery}</div>
				</section>
			</div>

			<div
				className="debug-screen__show-btn"
				onClick={() => setIsVisible(true)}
			>
				SHOW DEBUG SCREEN
			</div>
		</div>
	);
}
