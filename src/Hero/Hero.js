import React from "react";

import flavors from "./4flavors.jpg";
import styles from "./Hero.module.css";

const Hero = () => {
	return (
		<div className={styles.hero}>
			<article>
				<h1>Indulge in Sweet Street's Irresistible Cookies</h1>
				<p>
					"Discover a delightful range of cookes from classic chocolate chip to
					unique flavors, our selection will satisfy your sweet tooth and warm
					your heart."
				</p>
				<button>Order Now</button>
			</article>

			<img src={flavors} alt="cookie-flavors" />
		</div>
	);
};

export default Hero;
