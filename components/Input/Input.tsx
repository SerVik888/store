import { InputProps } from "./InputProps";
import s from "./Input.module.css";
import cn from "classnames";

export const Input = ({ className, ...props }: InputProps): JSX.Element => {
	return <input className={cn(className, s.input)} {...props} />;
};
