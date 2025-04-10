import React, { useState } from "react";

import Selection from "../Selection/Selection";
import styles from "./SelectionInfo.module.css";

//photos
import matcha from "./pictures/Sexy matcha 1.jpg";
import classic from "./pictures/mr classic.jpg";
import caramel from "./pictures/Kokutou caramel crunch.jpg";
import butter from "./pictures/Peanut Butter Paradise.jpg";

const cookies = [
	{
		flavor: "Sexy Matcha",

		description: (
			<>
				" Grab your favorite latte or green tea , and you've got yourself a
				match made in heaven with our Sexy Matcha Cookie filled with white
				chocolate chips that would make you go oh la la~. "{" "}
			</>
		),

		image: matcha,
	},
	{
		flavor: "Mr. Classic",
		description: (
			<>
				" If you ask me, I would definitely choose a classy guy. <br />
				<br /> Some things are timeless, and our chocolate chip cookies are a
				testament to that.These cookies are a nostalgic treat that takes you
				back to simpler times."
			</>
		),

		image: classic,
	},
	{
		flavor: "Kokutou Caramel Crunch",
		description: (
			<>
				" Are you ready to embark on a flavor adventure? These cookies are
				packed with Kokutou and Crunchy Caramel that would make your heart skip
				a beat! <br /> <br /> Dive into the rich, deep flavor of traditional
				Okinawan kokutou (black sugar). These cookies are irresistibly
				addictive! It's like a taste of paradise in every bite!"
			</>
		),
		image: caramel,
	},
	{
		flavor: "Peanut Butter Paradise",
		description: (
			<>
				"Get ready to go nuts over our Peanut Butter Paradise Cookie!
				<br /> <br />
				Irresistibly Nutty! The perfect blend of sweet and salty that will leave
				you craving more."
			</>
		),
		image: butter,
	},
];

const SelectionInfo = () => {
	const [selectedIndex, setSelectedIndex] = useState(0);

	return (
		<div className={styles.cookiesInfo}>
			<Selection
				flavor={cookies[selectedIndex].flavor}
				description={cookies[selectedIndex].description}
				image={cookies[selectedIndex].image}
			/>

			<div className={styles.circleNavigation}>
				{cookies.map((_, index) => (
					<button
						key={index}
						onClick={() => setSelectedIndex(index)}
						className={`${styles.circle} ${
							selectedIndex === index ? styles.active : ""
						}`}
					/>
				))}
			</div>
		</div>
	);
};

export default SelectionInfo;
