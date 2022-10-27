import cn from "@/utils/classNamesHelper";
import type { Children } from "@/utils/types";
import "./DecorativeTitle.css";

interface Props {
	children: Children;
	className?: string;
}

export default function DecorativeTitle({ children, className }: Props) {
	// Inspired from https://stackoverflow.com/a/27764938/19206552

	return (
		<h1 className={cn("decorative-title", className)}>
			{children}
			<div className="decorative-title__squiggly-underline">
				<div className="decorative-title__squiggly-underline-inner">
					~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
				</div>
			</div>
		</h1>
	);
}
