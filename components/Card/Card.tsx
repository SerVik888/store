import { CardProps } from "./CardProps";
import s from "./Card.module.css";
import cn from "classnames";
import { ForwardedRef, forwardRef } from "react";

export const Card = forwardRef(
	(
		{ color = "white", children, className, ...props }: CardProps,
		ref: ForwardedRef<HTMLDivElement>
	): JSX.Element => {
		return (
			<div
				className={cn(s.card, className, {
					[s.blue]: color == "blue",
				})}
				ref={ref}
				{...props}>
				{children}
			</div>
		);
	}
);
