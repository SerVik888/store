import { GetStaticProps } from "next";
import React, { useState } from "react";
import { Button, Htag, Input, Rating, Tag, Textarea } from "../components";
import { P } from "../components";
import { withLayout } from "../layout/Layout";
import axios from "axios";
import { MenuItem } from "../interfaces/menu.interface";
import { API } from "../helpers/api";

function Home({ menu }: HomeProps): JSX.Element {
	const [rating, setRating] = useState<number>(4);

	return (
		<>
			<Htag tag="h1">Текст</Htag>
			<Button appearance="primary" arrow="right">
				Text
			</Button>
			<Button appearance="ghost" arrow="down">
				Text
			</Button>
			<P size="s">
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam sit labore sed et modi?
				Vel facere dicta iste corporis accusantium mollitia laboriosam, alias quidem laborum
				voluptatem nostrum.
			</P>
			<P>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam sit labore sed et modi?
				Vel facere dicta iste corporis accusantium mollitia laboriosam, alias quidem laborum
				voluptatem nostrum.
			</P>
			<P size="l">
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam sit labore sed et modi?
				Vel facere dicta iste corporis accusantium mollitia laboriosam, alias quidem laborum
				voluptatem nostrum.
			</P>
			<Tag size="s" color="ghost">
				Ghost
			</Tag>
			<Tag size="s" color="green" href="https://fonts.googleapis.com">
				Green
			</Tag>
			<Tag color="primary">Primary</Tag>
			<Tag size="m" color="gray">
				Gray
			</Tag>
			<Tag size="m" color="red">
				Red
			</Tag>
			<Rating rating={rating} isEditable setRating={setRating} />
			<ul>
				{menu.map((m) => (
					<li key={m._id.secondCategory}>{m._id.secondCategory}</li>
				))}
			</ul>
			<Input placeholder="Имя" />
			<Textarea placeholder="Текст отзыва" />
		</>
	);
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
	const firstCategory = 0;
	const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
		firstCategory,
	});
	return {
		props: {
			menu,
			firstCategory,
		},
	};
};

interface HomeProps extends Record<string, unknown> {
	menu: MenuItem[];
	firstCategory: number;
}
