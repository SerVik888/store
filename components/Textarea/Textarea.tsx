import { TextareaProps } from "./Textarea.props";
import s from "./Textarea.module.css";
import cn from "classnames";
import { ForwardedRef, forwardRef } from "react";

export const Textarea = forwardRef(
	(
		{ error, className, ...props }: TextareaProps,
		ref: ForwardedRef<HTMLTextAreaElement>
	): JSX.Element => {
		return (
			<div className={cn(className, s["textarea-wrapper"])}>
				<textarea className={cn(s.textarea, { [s.error]: error })} ref={ref} {...props} />
				{error && (
					<span className={s["error-message"]} role="alert">
						{error.message}
					</span>
				)}
			</div>
		);
	}
);
