import { SidebarProps } from "./SidebarProps";
import s from "./Layout.module.css";

export const Sidebar = ({ ...props }: SidebarProps): JSX.Element => {
	return <div {...props}>SideBar</div>;
};
