import React, { useState, useEffect } from "react";
import styles from "./OrderForm.module.css";

//photos

import assorted from "./pictures/4flavors.jpg";
import caramel from "./pictures/caramelform.jpg";
import classic from "./pictures/mrclassicform.jpg";
import peanut from "./pictures/peanut.jpg";
import matcha from "./pictures/sexymatchaform.jpg";

const OrderForm = () => {
	const bigSizePrice = 250;
	const petitePackPrice = 500;

	const [order, setOrder] = useState({
		bigSize: {},
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

	const flavors = [
		{ name: "Sexy Matcha", image: matcha },
		{ name: "Peanut Butter Paradise", image: peanut },
		{ name: "Mr. Classic", image: classic },
		{ name: "Kokutou Caramel Crunch", image: caramel },
	];

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

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setOrder((prevOrder) => ({ ...prevOrder, [name]: value }));
	};

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
			return prev;
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		alert("Order Submitted");
		console.log(order);
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
						<label htmlFor="name">Name: </label>
						<input
							type="text"
							name="name"
							value={order.name}
							onChange={handleInputChange}
						/>

						<label htmlFor="address">Address: </label>
						<input
							type="text"
							name="address"
							value={order.address}
							onChange={handleInputChange}
						/>

						<label htmlFor="email">Email: </label>
						<input
							type="email"
							name="email"
							value={order.email}
							onChange={handleInputChange}
						/>

						<label htmlFor="phone">Phone #: </label>
						<input
							type="number"
							name="phone"
							value={order.phone}
							onChange={handleInputChange}
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
