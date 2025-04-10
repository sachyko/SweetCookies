import React from "react";
import styles from "./Feature.module.css";

const Feature = () => {
	return (
		<div className={styles.feature}>
			<h1>Indulge in the Sweetest Cookie Experience</h1>
			<p>
				Indulge in our delightful range of cookie flavors, crafted to satisfy
				every sweet tooth. From classic chocolate chip to innovative creations,
				there's something for everyone.
			</p>

			<article className={styles.article}>
				<div className={styles.feature1}>
					<i class="fa-solid fa-cookie-bite"></i>
					<h2>Choose Your Perfect Size</h2>
					<p>Select from our generous big size or petite small packs.</p>
				</div>

				<div className={styles.feature2}>
					<i class="fa-solid fa-cookie-bite"></i>
					<h2>Affordable Treats for Every Occasion</h2>
					<p>Enjoy premium cookies without breaking the bank.</p>
				</div>

				<div className={styles.feature3}>
					<i class="fa-solid fa-cookie-bite"></i>
					<h2>Order Now for Fresh Cookie Delivery</h2>
					<p>Experience the joy of cookie delivered to your door.</p>
				</div>
			</article>
		</div>
	);
};

export default Feature;
