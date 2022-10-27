import cn from "@/utils/classNamesHelper";
import Icon from "@mdi/react";
import "./MyIcon.css";

interface Props {
	path: string;
	rotate?: number;
	spin?: boolean | number;
	offsetY?: string;
	className?: string;
}

export default function MyIcon({
	path,
	rotate,
	spin,
	offsetY,
	className,
}: Props) {
	return (
		<Icon
			className={cn("my-icon", className)}
			size="1em"
			path={path}
			rotate={rotate}
			spin={spin}
			style={{
				bottom: offsetY,
			}}
		/>
	);
}
