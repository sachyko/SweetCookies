import React, { useState, useEffect } from "react";
import styles from "./OrderForm.module.css";

import emailjs from "emailjs-com";

//photos

import assorted from "./pictures/4flavors.jpg";
import caramel from "./pictures/caramelform.jpg";
import classic from "./pictures/mrclassicform.jpg";
import peanut from "./pictures/peanut.jpg";
import matcha from "./pictures/sexymatchaform.jpg";

const OrderForm = () => {
	//Prices
	const bigSizePrice = 250;
	const petitePackPrice = 500;

	//State to manage the entire order
	const [order, setOrder] = useState({
		bigSize: {}, //{flavorName: quantity}
		petitePack: { Assorted: 0, MixAndMatch: 0 },
		mixAndMatchFlavors: {
			"Sexy Matcha": 0,
			"Peanut Butter Paradise": 0,
			"Mr. Classic": 0,
			"Kokutou Caramel Crunch": 0,
		},
		name: "",
		address: "",
		email: "",
		phone: "",
	});

	const [total, setTotal] = useState(0);

	//flavors with images
	const flavors = [
		{ name: "Sexy Matcha", image: matcha },
		{ name: "Peanut Butter Paradise", image: peanut },
		{ name: "Mr. Classic", image: classic },
		{ name: "Kokutou Caramel Crunch", image: caramel },
	];

	//automatically calculate total price when order changes
	useEffect(() => {
		const bigTotal = Object.values(order.bigSize).reduce(
			(acc, count) => acc + count * bigSizePrice,
			0
		);
		const petiteTotal =
			(order.petitePack.Assorted + order.petitePack.MixAndMatch) *
			petitePackPrice;
		setTotal(bigTotal + petiteTotal);
	}, [order.bigSize, order.petitePack]);

	//adjust the quantity of big size or assorted packs
	const handleQualityChange = (type, flavor, amount) => {
		setOrder((prev) => {
			const updated = Math.max(0, (prev[type][flavor] || 0) + amount);
			return {
				...prev,
				[type]: {
					...prev[type],
					[flavor]: updated,
				},
			};
		});
	};

	//handle user input fields
	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setOrder((prevOrder) => ({ ...prevOrder, [name]: value }));
	};

	//change number of mix and match petite packs
	const handlePackCountChange = (delta) => {
		setOrder((prev) => {
			const newCount = Math.max(0, prev.petitePack.MixAndMatch + delta);
			const updatedFlavors = { ...prev.mixAndMatchFlavors };
			if (newCount > prev.petitePack.MixAndMatch) {
				flavors
					.slice(prev.petitePack.MixAndMatch, newCount)
					.forEach((flavor) => {
						updatedFlavors[flavor.name] = 0;
					});
			} else {
				Object.keys(updatedFlavors).forEach((flavor) => {
					updatedFlavors[flavor] = 0;
				});
			}

			return {
				...prev,
				petitePack: {
					...prev.petitePack,
					MixAndMatch: newCount,
				},
				mixAndMatchFlavors: updatedFlavors,
			};
		});
	};

	//adjust flavor section in Mix and Match
	const handleMixAndMatchFlavorChange = (flavorName, delta) => {
		setOrder((prev) => {
			const updatedFlavors = { ...prev.mixAndMatchFlavors };
			const newCount = Math.max(0, updatedFlavors[flavorName] + delta);
			updatedFlavors[flavorName] = newCount;

			const totalSelected = Object.values(updatedFlavors).reduce(
				(acc, val) => acc + val,
				0
			);

			const maxSelections = prev.petitePack.MixAndMatch * 4;
			if (totalSelected <= maxSelections) {
				return {
					...prev,
					mixAndMatchFlavors: updatedFlavors,
				};
			}
			return prev; //no change of limit exceeded
		});
	};

	//formate flavors or sizes into strings for email template
	const formatOrders = (obj) =>
		Object.entries(obj)
			.filter(([_, quantity]) => quantity > 0)
			.map(([flavor, quantity]) => ({
				flavor: String(flavor),
				quantity: Number(quantity),
			})) || [];

	// console.log("Formatted Big Size Orders:", formatOrders(order.bigSize)); // Check
	// console.log(
	// 	"Formatted Mix and Match Orders:",
	// 	formatOrders(order.mixAndMatchFlavors)
	// );
	//added: submit form and send email via EmailJs
	const handleSubmit = (e) => {
		e.preventDefault();

		// Simple validation to ensure required fields are filled
		if (!order.name || !order.address || !order.email || !order.phone) {
			alert("Please fill out all fields.");
			return;
		}

		const finalTotal = !isNaN(total) ? total : 0;

		const templateParams = {
			cc_email: order.email,
			name: order.name,
			email: order.email,
			phone: order.phone,
			address: order.address,
			total_price: finalTotal,
			assorted_count: order.petitePack.Assorted || 0,
			mix_and_match_count: order.petitePack.MixAndMatch || 0,
			big_size_orders: formatOrders(order.bigSize)
				.map((order) => `${order.flavor}: ${order.quantity}`)
				.join(", "),
			mix_and_match_flavors: formatOrders(order.mixAndMatchFlavors)
				.map((order) => `${order.flavor}: ${order.quantity}`)
				.join(", "),
		};
		// console.log(templateParams);
		emailjs
			.send(
				"SweetStreetjpn@gmail.com",
				"template_o4cjnpt",
				templateParams,
				"BDGo95mIObBFJPbM7"
			)
			.then(
				(response) => {
					console.log("SUCCESS!", response.status, response.text);
					alert("Order Submitted and Email Sent!");
				},
				(err) => {
					console.error("Failed...", err);
					alert("Something went wrong. Please try again.");
				}
			);
	};

	return (
		<form className={styles.cookieForm} onSubmit={handleSubmit}>
			<h1>Sweet Delights</h1>
			<p>Indulge in Sweetness - Order Now!</p>
			<div className={styles.orderSectionContainer}>
				{/* Big Size Section */}

				<div className={styles.orderSection}>
					<h3>Big Size (One Flavor) | 250 ¥</h3>
					{flavors.map((flavor) => (
						<div key={flavor.name} className={styles.flavorOption}>
							<img src={flavor.image} alt={flavor.name} />
							<span>{flavor.name}</span>
							<button
								type="button"
								onClick={() => handleQualityChange("bigSize", flavor.name, -1)}
							>
								-
							</button>
							<span>{order.bigSize[flavor.name] || 0}</span>
							<button
								type="button"
								onClick={() => handleQualityChange("bigSize", flavor.name, 1)}
							>
								+
							</button>
						</div>
					))}
				</div>

				{/* Petite Pack Section */}

				<div className={styles.flavorOption}>
					<h3>Petite Pack (Four Flavors) | 500 ¥</h3>
					<img src={assorted} alt="Assorted" />
					<span>Assorted</span>
					<button
						type="button"
						onClick={() => handleQualityChange("petitePack", "Assorted", -1)}
					>
						-
					</button>
					<span>{order.petitePack["Assorted"] || 0}</span>
					<button
						type="button"
						onClick={() => handleQualityChange("petitePack", "Assorted", 1)}
					>
						+
					</button>
				</div>

				{/* Mix and Match Section */}
				<div className={styles.orderSection}>
					<h3>Mix and Match</h3>
					<button type="button" onClick={() => handlePackCountChange(-1)}>
						-
					</button>
					<span>{order.petitePack.MixAndMatch}</span>
					<button type="button" onClick={() => handlePackCountChange(1)}>
						+
					</button>

					{/* Select Mix and Match Flavors */}
					<div className={styles.mixPack}>
						<p>Select up to {order.petitePack.MixAndMatch * 4} flavors:</p>
						{flavors.map((flavor) => {
							// const selectedCount = order.mixAndMatchFlavors[flavor.name] || 0;
							return (
								<div key={flavor.name} className={styles.flavorOption}>
									<img src={flavor.image} alt={flavor.name} />
									<span>{flavor.name}</span>
									<button
										type="button"
										onClick={() =>
											handleMixAndMatchFlavorChange(flavor.name, -1)
										}
									>
										-
									</button>
									<span>{order.mixAndMatchFlavors[flavor.name] || 0}</span>
									<button
										type="button"
										onClick={() =>
											handleMixAndMatchFlavorChange(flavor.name, 1)
										}
									>
										+
									</button>
								</div>
							);
						})}
					</div>
				</div>

				{/* User Info Form */}

				<div className={styles.userFieldContainer}>
					<div className={styles.userFields}>
						<label htmlFor="nameInput">Name: </label>
						<input
							type="text"
							name="name"
							id="nameInput"
							value={order.name}
							onChange={handleInputChange}
							autoComplete="name"
						/>

						<label htmlFor="addressInput">Address: </label>
						<input
							type="text"
							name="address"
							id="addressInput"
							value={order.address}
							onChange={handleInputChange}
							autoComplete="street-address"
						/>

						<label htmlFor="emailInput">Email: </label>
						<input
							type="email"
							name="email"
							id="emailInput"
							value={order.email}
							onChange={handleInputChange}
							autoComplete="email"
						/>

						<label htmlFor="phoneInput">Phone #: </label>
						<input
							type="number"
							name="phone"
							id="phoneInput"
							value={order.phone}
							onChange={handleInputChange}
							autoComplete="tel"
						/>
					</div>

					<button type="submit" className={styles.submitButton}>
						Submit
					</button>
				</div>
			</div>
			<div className={styles.totalPrice}>Total: {total}¥ </div>
		</form>
	);
};

export default OrderForm;
