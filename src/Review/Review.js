import React from "react";
import styles from "./Review.module.css";

const Review = () => {
	return (
		<div className={styles.review}>
			<h1>Sweet Reviews</h1>
			<div className={styles.customerReview}>
				<div className={styles.stars}>
					<i class="fa-solid fa-star"></i>
					<i class="fa-solid fa-star"></i>
					<i class="fa-solid fa-star"></i>
					<i class="fa-solid fa-star"></i>
					<i class="fa-solid fa-star"></i>
				</div>
				<h2>
					" Sweet Street's cookies are delightful treat that brighten my day! I
					have to order 10 more and share it with my friends. "
				</h2>
				<p> Rhodney | Shizuoka, Japan</p>
			</div>
		</div>
	);
};

export default Review;
