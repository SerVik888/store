import { Advantages, HhData, Htag, Sort, Tag } from "../../components";
import { TopPageComponentProps } from "./TopPageComponent.props";
import s from "./TopPageComponent.module.css";
import { TopLevelCategory } from "../../interfaces/page.interface";
import { SortEnum } from "../../components/Sort/SortProps";
import { useReducer } from "react";
import { sortReducer } from "./sort.reducer";

export const TopPageComponent = ({
	firstCategory,
	page,
	products,
}: TopPageComponentProps): JSX.Element => {
	const [{ products: sortedProducts, sort }, dispathSort] = useReducer(sortReducer, {
		products,
		sort: SortEnum.Rating,
	});

	const setSort = (sort: SortEnum) => {
		dispathSort({ type: sort });
	};

	return (
		<div className={s.wrapper}>
			<div className={s.title}>
				<Htag tag="h1">{page.title}</Htag>
				{products && (
					<Tag color="gray" size="m">
						{products.length}
					</Tag>
				)}
				<Sort sort={sort} setSort={setSort} />
				<div>{sortedProducts && sortedProducts.map((p) => <div key={p._id}>{p.title}</div>)}</div>
			</div>
			<div className={s.hhTitle}>
				<Htag tag="h2">Вакансии - {page.category}</Htag>
				<Tag color="red" size="m">
					hh.ru
				</Tag>
			</div>
			{firstCategory == TopLevelCategory.Courses && page.hh && <HhData {...page.hh} />}
			{page.advantages && page.advantages.length > 0 && (
				<>
					<Htag tag="h2">Преимущества</Htag>
					<Advantages advantages={page.advantages} />
				</>
			)}
			{page.seoText && <div className={s.seo} dangerouslySetInnerHTML={{ __html: page.seoText }} />}
			<Htag tag="h2">Получаемые навыки</Htag>
			{page.tags.map((t) => (
				<Tag key={t} color="primary">
					{t}
				</Tag>
			))}
		</div>
	);
};
