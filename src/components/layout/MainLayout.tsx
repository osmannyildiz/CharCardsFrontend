import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";
import type { Children } from "@/utils/types";
// import "./MainLayout.css";

interface Props {
	mainClassName?: string;
	headerChildren?: Children;
	children: Children;
}

export default function MainLayout({
	children,
	headerChildren,
	mainClassName,
}: Props) {
	return (
		<div className="main-layout">
			<Header>{headerChildren}</Header>
			<main className={mainClassName}>
				<div className="container">{children}</div>
			</main>
			<Footer />
		</div>
	);
}
