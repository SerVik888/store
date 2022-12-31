import { SidebarProps } from "./SidebarProps";
import s from "./Sidebar.module.css";
import cn from "classnames";
import { Menu } from "../Menu/Menu";
import Logo from "../logo.svg";

export const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
	return (
		<div className={cn(className, s.sidebar)} {...props}>
			<Logo className={s.logo} />
			<div>поиск</div>
			<Menu />
		</div>
	);
};
