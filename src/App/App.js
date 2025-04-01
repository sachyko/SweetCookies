import React from "react";

//components
import Navigation from "../Navigation/Navigation";
import Hero from "../Hero/Hero";
import Feature from "../Feature/Feature";
import Review from "../Review/Review";
import Footer from "../Footer/Footer";

function App() {
	return (
		<div className="App">
			<Navigation />
			<Hero />
			<Feature />
			<Review />
			<Footer />
		</div>
	);
}

export default App;
