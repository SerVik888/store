import s from "./Advantages.module.css";
import { AdvantagesProps } from "./AdvantagesProps";
import CheckIcon from "./check.svg";

export const Advantages = ({ advantages }: AdvantagesProps): JSX.Element => {
	return (
		<>
			{advantages.map((a) => (
				<div key={a._id} className={s.advantage}>
					<CheckIcon />
					<div className={s.title}>{a.title}</div>
					<hr className={s.vline} />
					<div>{a.description}</div>
				</div>
			))}
		</>
	);
};
