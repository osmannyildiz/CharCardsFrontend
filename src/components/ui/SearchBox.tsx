import cn from "@/utils/classNamesHelper";
import "./SearchBox.css";

interface Props {
	value: string;
	setValue: (value: string) => void;
	placeholder: string;
	align?: "start" | "center" | "end";
	className?: string;
}

export default function SearchBox({
	value,
	setValue,
	placeholder,
	align,
	className,
}: Props) {
	const onChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
		setValue(event.target.value);
	};

	return (
		<div className={cn("search-box", className)}>
			<input
				className="search-box__input input"
				type="text"
				value={value}
				onChange={onChange}
				placeholder={placeholder}
				style={{ textAlign: align }}
			/>
		</div>
	);
}
