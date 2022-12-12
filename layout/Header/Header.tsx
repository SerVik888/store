import { HeaderProps } from "./HeaderProps";
import s from "./Header.module.css";

export const Header = ({ ...props }: HeaderProps): JSX.Element => {
	return <div {...props}>Header</div>;
};
