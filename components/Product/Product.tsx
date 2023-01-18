import { ProductProps } from "./ProductProps";
import s from "./Product.module.css";
import cn from "classnames";
import { Card } from "../Card/Card";
import { Rating } from "../Rating/Rating";
import { Tag } from "../Tag/Tag";
import { Button } from "../Button/Button";
import { declOfNum, priceRu } from "../../helpers/helpers";
import { Divider } from "../Divider/Divider";
import Image from "next/image";
import { ForwardedRef, forwardRef, useRef, useState } from "react";
import { Review } from "../Review/Review";
import { ReviewForm } from "../ReviewForm/ReviewForm";
import { motion } from "framer-motion";

export const Product = motion(
	forwardRef(
		(
			{ product, className, ...props }: ProductProps,
			ref: ForwardedRef<HTMLDivElement>
		): JSX.Element => {
			const [isRewievOpened, setIsRewievOpened] = useState<boolean>(false);
			const reviewRef = useRef<HTMLDivElement>(null);

			const scrollToReview = () => {
				setIsRewievOpened(true);
				reviewRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
				reviewRef.current?.focus();
			};

			const variants = {
				visible: {
					opacity: 1,
					height: "auto",
					transition: {
						when: "beforeChildren",
						staggerChildren: 0.1,
					},
				},
				hidden: { opacity: 0, height: 0 },
			};

			return (
				<div className={className} {...props} ref={ref}>
					<Card className={s.product}>
						<div className={s.logo}>
							<Image
								src={process.env.NEXT_PUBLIC_DOMAIN + product.image}
								alt={product.title}
								width={70}
								height={70}
							/>
						</div>
						<div className={s.title}>{product.title}</div>
						<div className={s.price}>
							<span>
								<span className="visualy-hidden">цена</span>
								{priceRu(product.price)}
							</span>
							{product.oldPrice && (
								<Tag color="green" className={s["old-price"]}>
									<span className="visualy-hidden">скидка</span>
									{priceRu(product.price - product.oldPrice)}
								</Tag>
							)}
						</div>
						<div className={s.credit}>
							<span className="visualy-hidden">кредит</span>
							{priceRu(product.credit)}
							<span className={s.month}>/мес</span>
						</div>
						<div className={s.rating}>
							<span className="visualy-hidden">
								{"рейтинг" + (product.reviewAvg ?? product.initialRating)}
							</span>
							<Rating rating={product.reviewAvg ?? product.initialRating} />
						</div>
						<div className={s.tags}>
							{product.categories.map((c) => (
								<Tag key={c} className={s.category} color="ghost">
									{c}
								</Tag>
							))}
						</div>
						<div className={s["price-title"]} aria-hidden={true}>
							цена
						</div>
						<div className={s["credit-title"]} aria-hidden={true}>
							кредит
						</div>
						<div className={s["rate-title"]}>
							<span>{product.reviewCount} </span>
							<a href="#ref" onClick={scrollToReview}>
								{declOfNum(product.reviewCount, ["отзыв", "отзыва", "отзывов"])}
							</a>
						</div>
						<Divider className={s.hr} />
						<div className={s.description}>{product.description}</div>
						<div className={s.feature}>
							{product.characteristics.map((c) => (
								<div className={s.characteristic} key={c.name}>
									<span className={s["characteristic-name"]}>{c.name}</span>
									<span className={s["characteristic-dots"]}></span>
									<span className={s.characteristicValue}>{c.value}</span>
								</div>
							))}
						</div>
						<div className={s["adv-block"]}>
							{product.advantages && (
								<div className={s.advantages}>
									<div className={s["adv-title"]}>Преимущества</div>
									<div>{product.advantages}</div>
								</div>
							)}
							{product.disadvantages && (
								<div className={s.disadvantages}>
									<div className={s["adv-title"]}>Недостатки</div>
									<div>{product.disadvantages}</div>
								</div>
							)}
						</div>
						<Divider className={cn(s.hr, s.hr2)} />
						<div className={s.actions}>
							<Button appearance="primary">Узнать подробнее</Button>
							<Button
								appearance="ghost"
								arrow={isRewievOpened ? "down" : "right"}
								className={s["review-button"]}
								onClick={() => setIsRewievOpened(!isRewievOpened)}
								aria-expanded={isRewievOpened}>
								Читать отзывы
							</Button>
						</div>
					</Card>
					<motion.div
						variants={variants}
						initial="hidden"
						animate={isRewievOpened ? "visible" : "hidden"}>
						<Card
							color="blue"
							className={cn(s.reviews)}
							ref={reviewRef}
							tabIndex={isRewievOpened ? 0 : -1}>
							{product.reviews.map((r) => (
								<div key={r._id}>
									<Review review={r} />
									<Divider />
								</div>
							))}
							<ReviewForm productId={product._id} isOpened={isRewievOpened} />
						</Card>
					</motion.div>
				</div>
			);
		}
	)
);
