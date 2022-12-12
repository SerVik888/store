import { TagProps } from './TagProps';
import s from './Tag.module.css';
import cn from 'classnames';

export const Tag = ({
	size = 's',
	children,
	color = 'ghost',
	href,
	className,
	...props
}: TagProps): JSX.Element => {
	return (
		<div
			className={cn(s.tag, className, {
				[s.s]: size == 's',
				[s.m]: size == 'm',
				[s.ghost]: color == 'ghost',
				[s.red]: color == 'red',
				[s.gray]: color == 'gray',
				[s.green]: color == 'green',
				[s.primary]: color == 'primary',
			})}
			{...props}>
			{href ? <a href={href}>{children}</a> : <>{children}</>}
		</div>
	);
};
