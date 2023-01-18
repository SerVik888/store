import { SortEnum, SortProps } from "./SortProps";
import s from "./Sort.module.css";
import cn from "classnames";
import SortIcon from "./sort.svg";

export const Sort = ({ sort, setSort, className, ...props }: SortProps): JSX.Element => {
	return (
		<div className={cn(s.sort, className)} {...props}>
			<div className={s["sort-name"]} id="sort">
				Сортировка
			</div>
			<button
				id="rating"
				onClick={() => setSort(SortEnum.Rating)}
				className={cn({ [s.active]: sort == SortEnum.Rating })}
				aria-selected={sort == SortEnum.Rating}
				aria-labelledby="sort rating">
				<SortIcon className={s["sort-icon"]} />
				По рейтенгу
			</button>
			<button
				id="price"
				onClick={() => setSort(SortEnum.Price)}
				className={cn({ [s.active]: sort == SortEnum.Price })}
				aria-selected={sort == SortEnum.Price}
				aria-labelledby="sort price">
				<SortIcon className={s["sort-icon"]} />
				По цене
			</button>
		</div>
	);
};
