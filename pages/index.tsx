import React, { useEffect, useState } from "react";
import { Button, Htag, Rating, Tag } from "../components";
import { P } from "../components";
import { withLayout } from "../layout/Layout";

function Home(): JSX.Element {
	const [counter, setCounter] = useState<number>(0);
	const [rating, setRating] = useState<number>(4);

	useEffect(() => {
		if (counter > 2) {
			console.log("Counter: " + counter);
		}
	});

	return (
		<>
			<Htag tag="h1">Текст {counter}</Htag>
			<Button appearance="primary" arrow="right" onClick={() => setCounter((x) => x + 1)}>
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
		</>
	);
}

export default withLayout(Home);
