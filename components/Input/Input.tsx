import { InputProps } from "./InputProps";
import s from "./Input.module.css";
import cn from "classnames";
import { ForwardedRef, forwardRef } from "react";

export const Input = forwardRef(
	(
		{ className, error, ...props }: InputProps,
		ref: ForwardedRef<HTMLInputElement>
	): JSX.Element => {
		return (
			<div className={cn(className, s["input-wrapper"])}>
				<input className={cn(s.input, { [s.error]: error })} ref={ref} {...props} />
				{error && (
					<span className={s["error-message"]} role="alert">
						{error.message}
					</span>
				)}
			</div>
		);
	}
);
