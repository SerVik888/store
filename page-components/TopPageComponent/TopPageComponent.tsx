import { Advantages, HhData, Htag, Product, Sort, Tag } from "../../components";
import { TopPageComponentProps } from "./TopPageComponent.props";
import s from "./TopPageComponent.module.css";
import { TopLevelCategory } from "../../interfaces/page.interface";
import { SortEnum } from "../../components/Sort/SortProps";
import { useEffect, useReducer } from "react";
import { sortReducer } from "./sort.reducer";
import { useReducedMotion } from "framer-motion";

export const TopPageComponent = ({
	firstCategory,
	page,
	products,
}: TopPageComponentProps): JSX.Element => {
	const [{ products: sortedProducts, sort }, dispathSort] = useReducer(sortReducer, {
		products,
		sort: SortEnum.Rating,
	});
	const shouldReduceMotion = useReducedMotion();

	const setSort = (sort: SortEnum) => {
		dispathSort({ type: sort });
	};

	useEffect(() => {
		dispathSort({ type: "reset", initialState: products });
	}, [products]);

	return (
		<div className={s.wrapper}>
			<div className={s.title}>
				<Htag tag="h1">{page.title}</Htag>
				{products && (
					<Tag color="gray" size="m" aria-label={products.length + "элементов"}>
						{products.length}
					</Tag>
				)}
				<Sort sort={sort} setSort={setSort} />
			</div>
			<div role="list">
				{sortedProducts &&
					sortedProducts.map((p) => (
						<Product
							role="listitem"
							layout={shouldReduceMotion ? false : true}
							key={p._id}
							product={p}
						/>
					))}
			</div>

			<div className={s["hh-title"]}>
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
