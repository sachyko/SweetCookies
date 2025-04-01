import React from "react";

import logo from "./sweettstreetlogo.jpg";
import styles from "./Footer.module.css";

const Footer = () => {
	return (
		<div className={styles.footer}>
			<img src={logo} alt="logo" />
			<div className={styles.group}>
				<ul className={styles.footbarlinks}>
					<li>Home</li>
					<li>Cookie Creations</li>
					<li>Buy Now</li>
					<li>Contact Us</li>
				</ul>
				<p>@ 2025 Sweet Streets All rights reserved</p>
			</div>
		</div>
	);
};

export default Footer;
