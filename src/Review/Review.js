import React, { useState } from "react";

//icons
import { FaStar, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import styles from "./Review.module.css";
const reviews = [
	{
		review: (
			<>
				" Sweet Street's cookies are delightful treat that brighten my day! I
				have to order 10 more and share it with my friends. "
			</>
		),
		name: "Rhodney",
		location: "Shizuoka, Japan",
	},

	{
		review: (
			<>
				" You know it was so good when I didn't even take a picture of the
				package. Having a baker as a friend is not for the weak. Btw, if you're
				in Japan and not order, you're missing out. "
			</>
		),
		name: "Sobia",
		location: "Kanagawa, Japan",
	},
	{
		review: (
			<>" Among all the flavor, the chocolate chip cookie is the BEST! "</>
		),
		name: "Tetsu",
		location: "Tokorozawa, Japan",
	},
];

const Review = () => {
	const [current, setCurrent] = useState(0);
	const [fade, setFade] = useState(false);

	const handlePrev = () => {
		setFade(true);
		setTimeout(() => {
			setCurrent((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
			setFade(false);
		}, 300);
	};

	const handleNext = () => {
		setFade(true);
		setTimeout(() => {
			setCurrent((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
			setFade(false);
		}, 300);
	};
	return (
		<div className={styles.review}>
			<h1>Sweet Reviews</h1>
			<div className={styles.customerReview}>
				<div className={styles.stars}>
					<FaStar />
					<FaStar />
					<FaStar />
					<FaStar />
					<FaStar />
				</div>
				<div
					className={`${styles.fadeWrapper} ${
						fade ? styles.fadeOut : styles.fadeIn
					}`}
				>
					<h2>{reviews[current].review}</h2>
					<p>
						{reviews[current].name} | {reviews[current].location}
					</p>
				</div>
			</div>
			<div className={styles.navButtons}>
				<button
					className={`${styles.arrow} ${styles.left}`}
					onClick={handlePrev}
				>
					<FaArrowLeft />
				</button>

				<button
					className={`${styles.arrow} ${styles.left}`}
					onClick={handleNext}
				>
					<FaArrowRight />
				</button>
			</div>
		</div>
	);
};

export default Review;
