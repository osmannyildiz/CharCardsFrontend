import { Children } from "@/utils/types";
// import "./Header.css";

interface Props {
	children?: Children;
}

export default function Header({ children }: Props) {
	return (
		<header className="header">
			<h1>CharCards</h1>
			{children}
		</header>
	);
}
