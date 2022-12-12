import { FooterProps } from "./FooterProps";
import s from "./Header.module.css";

export const Footer = ({ ...props }: FooterProps): JSX.Element => {
	return <div {...props}>Footer</div>;
};
