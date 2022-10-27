import cn from "@/utils/classNamesHelper";
import "./SearchBox.css";

interface Props {
	placeholder: string;
	align?: "start" | "center" | "end";
	className?: string;
}

export default function SearchBox({
	placeholder,
	align,
	className,
}: Props) {
	return (
		<div className={cn("search-box", className)}>
			<input
				className="search-box__input input"
				type="text"
				placeholder={placeholder}
				style={{ textAlign: align }}
			/>
		</div>
	);
}
