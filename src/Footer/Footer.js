import React from "react";
import { Link } from "react-router-dom";

import logo from "./sweettstreetlogo.jpg";
import styles from "./Footer.module.css";

const Footer = () => {
	return (
		<div className={styles.footer}>
			<img src={logo} alt="logo" />
			<div className={styles.group}>
				<ul className={styles.footbarlinks}>
					<h3>Helpful Links</h3>
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
				<div className={styles.socialMedia}>
					<h3>Stay Connected</h3>
					<li>
						<i class="fa-solid fa-envelope-circle-check"></i>
						SweetStreetjpn@gmail.com
					</li>
					<li>
						<i class="fa-solid fa-phone"></i>+8170-1428-1515
					</li>
					<li>
						<i class="fa-brands fa-facebook"></i>
						Sweet Street
					</li>
					<li>
						<i class="fa-brands fa-instagram"></i>
						SweetStreetjpn
					</li>
					<li>
						<i class="fa-brands fa-tiktok"></i>
						@sweet.street.jpn
					</li>
				</div>
				<span>@ 2025 Sweet Streets All rights reserved</span>
			</div>
		</div>
	);
};

export default Footer;
