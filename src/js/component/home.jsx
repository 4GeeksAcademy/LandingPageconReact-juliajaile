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
		  <div className="d-flex flex-row align-items-center justify-content-center">
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
