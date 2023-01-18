import { ReviewProps } from "./ReviewProps";
import s from "./Review.module.css";
import UserIcon from "./user.svg";
import cn from "classnames";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import { Rating } from "../Rating/Rating";

export const Review = ({ review, className, ...props }: ReviewProps): JSX.Element => {
	const { name, title, description, createdAt, rating } = review;
	return (
		<div className={cn(s.review, className, {})} {...props}>
			<UserIcon className={s.user} />
			<div className={s.title}>
				<span className={s.name}>{name}:</span>&nbsp;&nbsp;
				<span>{title}</span>
			</div>
			<div className={s.date}>{format(new Date(createdAt), "dd MMMM yyyy", { locale: ru })}</div>
			<div className={s.rating}>
				<Rating rating={rating} />
			</div>
			<div className={s.description}>{description}</div>
		</div>
	);
};
