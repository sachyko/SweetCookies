import React from "react";
import styles from "./Navigation.module.css";

//pictures
import logo from "./picture/sweettstreetlogo.jpg";
const Navigation = () => {
	return (
		<header className={styles.navbar}>
			<img src={logo} alt="logo" />
			<nav>
				<ul className={styles.navlinks}>
					<li>Home</li>
					<li>Cookie Creations</li>
					<li>Buy Now</li>
					<li>Contact Us</li>
				</ul>
			</nav>
		</header>
	);
};

export default Navigation;
