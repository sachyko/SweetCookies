import React from "react";
import styles from "./Navigation.module.css";
import { Link } from "react-router-dom";

//pictures
import logo from "./picture/sweettstreetlogo.jpg";
const Navigation = () => {
	return (
		<header className={styles.navbar}>
			<img src={logo} alt="logo" />
			<nav>
				<ul className={styles.navlinks}>
					<li>
						<Link to="/#home">Home</Link>
					</li>
					<li>
						<Link to="/#selection">Cookie Creations</Link>
					</li>
					<li>
						<Link to="/#order">Buy Now</Link>
					</li>
					<li>
						<Link to="/#contact">Contact Us</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Navigation;
