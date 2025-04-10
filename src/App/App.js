import React from "react";
import ScrollToHash from "./ScrollToHash";
//components
import Navigation from "../Navigation/Navigation";
import Hero from "../Hero/Hero";
import Feature from "../Feature/Feature";
import SelectionInfo from "../SelectionInfo/SelectionInfo";
import OrderForm from "../OrderForm/OrderForm";
import Review from "../Review/Review";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

function App() {
	return (
		<div className="App">
			<ScrollToHash />
			<section id="home">
				<Navigation />
			</section>

			<section id="hero">
				<Hero />
			</section>

			<section id="feature">
				<Feature />
			</section>

			<section id="selection">
				<SelectionInfo />
			</section>

			<section id="order">
				<OrderForm />
			</section>

			<section id="review">
				<Review />
			</section>

			<section id="contact">
				<Contact />
			</section>

			<section id="footer">
				<Footer />
			</section>
		</div>
	);
}

export default App;
