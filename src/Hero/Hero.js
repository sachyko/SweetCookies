import React, { useState, useEffect, useRef } from "react";

import flavors from "./4flavors.jpg";
import styles from "./Hero.module.css";

const Typewriter = ({ text }) => {
	const [displayedText, setDisplayedText] = useState("");
	const [index, setIndex] = useState(0);
	const timeoutRef = useRef(null);

	useEffect(() => {
		if (index < text.length) {
			timeoutRef.current = setTimeout(() => {
				setDisplayedText((prev) => prev + text[index]);
				setIndex((prev) => prev + 1);
			}, 85); //Typing speed (100 ms per character)
		}
		return () => {
			clearTimeout(timeoutRef.current);
		};
	}, [index, text]);

	return (
		<h1>
			{displayedText}
			<span className={styles.cursor}>|</span>
		</h1>
	);
};

const Hero = () => {
	const fullText = "Indulge in Sweet Street's Irresistible Cookies";

	return (
		<div className={styles.hero}>
			<article>
				<h1>
					<Typewriter text={fullText} />
				</h1>

				<p>
					"Discover a delightful range of cookies from classic chocolate chip to
					unique flavors, our selection will satisfy your sweet tooth and warm
					your heart."
				</p>

				<button
					onClick={() => {
						const section = document.getElementById("order");
						if (section) {
							section.scrollIntoView({ behavior: "smooth" });
						}
					}}
				>
					Order Now
				</button>
			</article>

			<img src={flavors} alt="cookie-flavors" />
		</div>
	);
};

export default Hero;
