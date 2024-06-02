import React from "react";

//include images into your bundle
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";

//create your first component
const Home = () => {
	return (
		<div className="">
			<Navbar/>
			<Jumbotron/>
		    <Card/>
			<Card/>
			<Card/>
			<Card/>
		    <Footer/> 
		</div>
	);
};

export default Home;
