import { SearchProps } from "./SearchProps";
import s from "./Search.module.css";
import cn from "classnames";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import { useState } from "react";
import GlassIcon from "./glass.svg";
import { useRouter } from "next/router";

export const Search = ({ className, ...props }: SearchProps): JSX.Element => {
	const [search, setSearch] = useState<string>("");
	const router = useRouter();

	const goToSearch = () => {
		router.push({
			pathname: "/search",
			query: {
				q: search,
			},
		});
	};

	const handleKeyDown = (e: KeyboardEvent) => {
		if (e.key == "Enter") {
			goToSearch();
		}
	};

	return (
		<form className={cn(className, s.search)} {...props} role="search">
			<Input
				className={s.input}
				placeholder="Поиск..."
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				onKeyDown={handleKeyDown}
			/>
			<Button
				className={s.button}
				appearance="primary"
				onClick={goToSearch}
				aria-label="Искать по сайту">
				<GlassIcon />
			</Button>
		</form>
	);
};