import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import React from "react";
import axios from "axios";
import { withLayout } from "../../layout/Layout";
import { MenuItem } from "../../interfaces/menu.interface";
import { firstLevelMenu } from "../../helpers/helpers";
import { ParsedUrlQuery } from "node:querystring";
import { API } from "../../helpers/api";

function Type({ firstCategory }: TypeProps): JSX.Element {
	return <div>Type: {firstCategory}</div>;
}

export default withLayout(Type);

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: firstLevelMenu.map((m) => "/" + m.route),
		fallback: true,
	};
};

export const getStaticProps: GetStaticProps<TypeProps> = async ({
	params,
}: GetStaticPropsContext<ParsedUrlQuery>) => {
	if (!params) {
		return {
			notFound: true,
		};
	}
	const firstCatigoryItem = firstLevelMenu.find((m) => m.route == params.type);
	if (!firstCatigoryItem) {
		return {
			notFound: true,
		};
	}

	const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
		firstCategory: firstCatigoryItem.id,
	});
	return {
		props: {
			menu,
			firstCategory: firstCatigoryItem.id,
		},
	};
};

interface TypeProps extends Record<string, unknown> {
	menu: MenuItem[];
	firstCategory: number;
}
