import { CardProps } from "./CardProps";
import s from "./Card.module.css";
import cn from "classnames";

export const Card = ({
	color = "white",
	children,
	className,
	...props
}: CardProps): JSX.Element => {
	return (
		<div
			className={cn(s.card, className, {
				[s.blue]: color == "blue",
			})}
			{...props}>
			{children}
		</div>
	);
};
