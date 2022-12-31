import s from "./HhData.module.css";
import { HhDataProps } from "./HhDataProps";
import StarIcon from "./rate.svg";
import { Card } from "../Card/Card";
import { priceRu } from "../../helpers/helpers";

export const HhData = ({
	count,
	juniorSalary,
	middleSalary,
	seniorSalary,
}: HhDataProps): JSX.Element => {
	return (
		<div className={s.hh}>
			<Card className={s.count}>
				<div className={s.title}>Всего вакансий</div>
				<div className={s.countValue}>{count}</div>
			</Card>

			<Card className={s.salary}>
				<div>
					<div className={s.title}>Начальный</div>
					<div className={s.salaryValue}>{priceRu(juniorSalary)}</div>
					<div className={s.rate}>
						<StarIcon className={s.filled} />
						<StarIcon />
						<StarIcon />
					</div>
				</div>

				<div>
					<div className={s.title}>Средний</div>
					<div className={s.salaryValue}>{priceRu(middleSalary)}</div>
					<div className={s.rate}>
						<StarIcon className={s.filled} />
						<StarIcon className={s.filled} />
						<StarIcon />
					</div>
				</div>

				<div>
					<div className={s.title}>Профессионал</div>
					<div className={s.salaryValue}>{priceRu(seniorSalary)}</div>
					<div className={s.rate}>
						<StarIcon className={s.filled} />
						<StarIcon className={s.filled} />
						<StarIcon className={s.filled} />
					</div>
				</div>
			</Card>
		</div>
	);
};
