import React from "react";

//components
import Navigation from "../Navigation/Navigation";
import Hero from "../Hero/Hero";
import Footer from "../Footer/Footer";
import Review from "../Review/Review";
function App() {
	return (
		<div className="App">
			<Navigation />
			<Hero />
			<Review />
			<Footer />
		</div>
	);
}

export default App;
