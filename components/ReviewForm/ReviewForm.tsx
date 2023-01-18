import { ReviewFormProps } from "./ReviewFormProps";
import s from "./ReviewForm.module.css";
import cn from "classnames";
import CloseIcon from "./close.svg";
import { Rating } from "../Rating/Rating";
import { Input } from "../Input/Input";
import { Textarea } from "../Textarea/Textarea";
import { Button } from "../Button/Button";
import { useForm, Controller } from "react-hook-form";
import { IReviewForm, IReviewSentResponse } from "./ReviewForm.interface";
import axios from "axios";
import { API } from "../../helpers/api";
import { useState } from "react";

export const ReviewForm = ({
	productId,
	isOpened,
	className,
	...props
}: ReviewFormProps): JSX.Element => {
	const {
		register,
		control,
		handleSubmit,
		formState: { errors },
		reset,
		clearErrors,
	} = useForm<IReviewForm>();

	const [isSuccess, setIsSuccess] = useState<boolean>(false);
	const [error, setError] = useState<string>("");

	const onSubmit = async (formData: IReviewForm) => {
		try {
			const { data } = await axios.post<IReviewSentResponse>(API.review.createDemo, {
				...formData,
				productId,
			});
			if (data.message) {
				setIsSuccess(true);
				reset();
			} else {
				setError("Что-то пошло не так");
			}
		} catch {
			setError("Что-то пошло не так");
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className={cn(s["review-form"], className, {})} {...props}>
				<Input
					{...register("name", { required: { value: true, message: "Заполните имя" } })}
					placeholder="Имя"
					error={errors.name}
					tabIndex={isOpened ? 0 : -1}
					aria-invalid={errors.name ? true : false}
				/>
				<Input
					{...register("title", { required: { value: true, message: "Заполните заголовок" } })}
					className={s.title}
					placeholder="Заголовок отзыва"
					error={errors.title}
					tabIndex={isOpened ? 0 : -1}
					aria-invalid={errors.title ? true : false}
				/>
				<div className={s.rating}>
					<span>Оценка:</span>
					<Controller
						control={control}
						name="rating"
						rules={{ required: { value: true, message: "Укажите рейтинг" } }}
						render={({ field }) => (
							<Rating
								isEditable
								error={errors.rating}
								rating={field.value}
								ref={field.ref}
								setRating={field.onChange}
								tabIndex={isOpened ? 0 : -1}
							/>
						)}
					/>
				</div>
				<Textarea
					{...register("description", { required: { value: true, message: "Заполните описание" } })}
					className={s.desctiption}
					placeholder="Текст отзыва"
					error={errors.description}
					tabIndex={isOpened ? 0 : -1}
					aria-label="Текст отзыва"
					aria-invalid={errors.description ? true : false}
				/>
				<div className={s.submit}>
					<Button appearance="primary" tabIndex={isOpened ? 0 : -1} onClick={() => clearErrors()}>
						Отправить
					</Button>
					<span className={s.info}>
						* Перед публикацией отзыв пройдет предварительную модерацию и проверку
					</span>
				</div>
			</div>
			{isSuccess && (
				<div className={cn(s.panel, s.success)} role="alert">
					<div className={s["success-title"]}>Ваш отзыв отправлен</div>
					<div>Спасибо, ваш отзыв будет опубликован после проверки</div>
					<button
						className={s.close}
						onClick={() => {
							setIsSuccess(false);
						}}
						aria-label="Закрыть оповещение">
						<CloseIcon />
					</button>
				</div>
			)}
			{error && (
				<div className={cn(s.panel, s.error)} role="alert">
					Что-то пошло не так, попробуйте обновить страницу
					<button
						className={s.close}
						onClick={() => {
							setError("undefined");
						}}
						aria-label="Закрыть оповещение">
						<CloseIcon />
					</button>
				</div>
			)}
		</form>
	);
};
