import React from "react";
import { motion } from "framer-motion";
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
				<motion.div
					className={styles.feature1}
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: false }}
					transition={{ duration: 2 }}
				>
					<i class="fa-solid fa-cookie-bite"></i>
					<h2>Choose Your Perfect Size</h2>
					<p>Select from our generous big size or petite small packs.</p>
				</motion.div>

				<motion.div
					className={styles.feature2}
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: false }}
					transition={{ duration: 2, delay: 0.5 }}
				>
					<i class="fa-solid fa-cookie-bite"></i>
					<h2>Affordable Treats for Every Occasion</h2>
					<p>Enjoy premium cookies without breaking the bank.</p>
				</motion.div>

				<motion.div
					className={styles.feature3}
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: false }}
					transition={{ duration: 2, delay: 1 }}
				>
					<i class="fa-solid fa-cookie-bite"></i>
					<h2>Order Now for Fresh Cookie Delivery</h2>
					<p>Experience the joy of cookie delivered to your door.</p>
				</motion.div>
			</article>
		</div>
	);
};

export default Feature;
