import { Htag } from "../components";
import { withLayout } from "../layout/Layout";

export function Error500(): JSX.Element {
	return (
		<>
			<Htag tag="h1">Ошибка 505</Htag>
		</>
	);
}

export default withLayout(Error500);
