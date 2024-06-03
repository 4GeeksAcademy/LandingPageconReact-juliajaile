import React from "react";

//include images into your bundle
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar/>
			<Jumbotron/>
		  <div className="container d-flex gap-5 mt-4">
		    <Card/>
			<Card/>
			<Card/>
			<Card/>
		  </div>
		    <Footer/> 
		</div>
	);
};

export default Home;
