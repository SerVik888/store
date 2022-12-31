import { TextareaProps } from "./Textarea.props";
import s from "./TextArea.module.css";
import cn from "classnames";

export const Textarea = ({ className, ...props }: TextareaProps): JSX.Element => {
	return <textarea className={cn(className, s.textarea)} {...props} />;
};
