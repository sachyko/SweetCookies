import React from "react";

import styles from "./Selection.module.css";

const Selection = ({ flavor, description, image }) => {
	return (
		<div className={styles.cookiesInfo}>
			<h1>Sweet Selection</h1>
			<p>Indulge in our wide variety of gourmet cookies</p>
			<div className={styles.cookiesData}>
				<div className={styles.textSection}>
					<h2>{flavor}</h2>
					<p>{description} </p>
				</div>

				<div className={styles.imageSection}>
					<img src={image} alt={flavor} />
				</div>
			</div>
		</div>
	);
};

export default Selection;
