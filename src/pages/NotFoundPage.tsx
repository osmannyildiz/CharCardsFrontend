import MainLayout from "@/components/layout/MainLayout";
import DecorativeTitle from "@/components/ui/DecorativeTitle";
import { Link } from "react-router-dom";
import "./NotFoundPage.css";

export default function NotFoundPage() {
	return (
		<MainLayout mainClassName="not-found-page">
			<img
				className="not-found-page__img mx-auto"
				src={`${process.env.BASE_URL}not-found.svg`}
				alt="Not found"
			/>
			<DecorativeTitle>Not Found</DecorativeTitle>
			<p>
				Seems like the link that brought you here is broken. <br />
				Wormholes can be very unstable, y'know.
			</p>
			<Link className="not-found-page__home-btn btn btn--green" to="/">
				<span>Go to home page</span>
			</Link>
		</MainLayout>
	);
}
