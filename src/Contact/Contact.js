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
		const textarea = document.getElementById("message");
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
						<i class="fa-solid fa-envelope-circle-check"></i>
						SweetStreetjpn@gmail.com
					</p>
					<p>
						<i class="fa-solid fa-phone"></i>+8170-1428-1515
					</p>
					<p>
						<i class="fa-brands fa-facebook"></i>
						Sweet Street
					</p>
					<p>
						<i class="fa-brands fa-instagram"></i>
						SweetStreetjpn
					</p>
					<p>
						<i class="fa-brands fa-tiktok"></i>
						@sweet.street.jpn
					</p>
				</div>

				<div className={styles.contactForm}>
					<h2>Contact Us</h2>
					<form onSubmit={handleSubmit}>
						<label>Name</label>
						<input
							type="text"
							name="name"
							value={formData.name}
							onChange={handleChange}
							required
						/>

						<label>Email</label>
						<input
							type="email"
							name="email"
							value={formData.email}
							onChange={handleChange}
							required
						/>

						<label>Message</label>
						<textarea
							id="message"
							name="message"
							value={formData.message}
							onChange={handleChange}
							required
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
