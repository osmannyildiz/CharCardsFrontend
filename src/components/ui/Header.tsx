import type { Children } from "@/utils/types";
import "./Header.css";

interface Props {
	children?: Children;
}

export default function Header({ children }: Props) {
	return (
		<header className="header">
			<div className="container">
				<img className="header__logo" src="/logo.png" alt="CharCards" />
				{children}
			</div>
		</header>
	);
}
