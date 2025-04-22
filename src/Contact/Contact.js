import React, { useEffect, useState } from "react";

import styles from "./Contact.module.css";

const Contact = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	useEffect(() => {
		const textarea = document.getElementById("messageInput");
		textarea.style.height = "auto";
		textarea.style.height = `${textarea.scrollHeight}px`;
	}, [formData.message]);
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Form submitted", formData);
		//Reset
		setFormData({ name: "", email: "", message: "" });
	};
	return (
		<div className={styles.contact}>
			<div className={styles.tagline}>
				<h2>Craving Something Sweet? Drop Us A Message !</h2>
			</div>
			<div className={styles.contactContainer}>
				<div className={styles.socials}>
					<h3>Reach Us Anytime</h3>
					<p>
						<i className="fa-solid fa-envelope-circle-check"></i>
						SweetStreetjpn@gmail.com
					</p>
					<p>
						<i className="fa-solid fa-phone"></i>+8170-1428-1515
					</p>
					<p>
						<i className="fa-brands fa-facebook"></i>
						Sweet Street
					</p>
					<p>
						<i className="fa-brands fa-instagram"></i>
						SweetStreetjpn
					</p>
					<p>
						<i className="fa-brands fa-tiktok"></i>
						@sweet.street.jpn
					</p>
				</div>
				<div className={styles.contactForm}>
					<h2>Contact Us</h2>
					<form onSubmit={handleSubmit}>
						<label htmlFor="nameInput">Name</label>
						<input
							type="text"
							name="name"
							id="nameInput"
							value={formData.name}
							onChange={handleChange}
							autoComplete="name"
						/>

						<label htmlFor="emailInput">Email</label>
						<input
							type="email"
							name="email"
							id="emailInput"
							value={formData.email}
							onChange={handleChange}
							autoComplete="email"
						/>

						<label htmlFor="messageInput">Message</label>
						<textarea
							name="message"
							id="messageInput"
							value={formData.message}
							onChange={handleChange}
							autoComplete="off"
						></textarea>

						<button type="submit" className={styles.submit}>
							Submit Now
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;
