import React from "react";

//include images into your bundle
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";

//create your first component
const Home = () => {

const infoCard = [
  {
	title:"First Card",
	imageUrl:"https://images.pexels.com/photos/2625275/pexels-photo-2625275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
	description:"Sed a vehicula ipsum. Nunc eget pellentesque mauris. In id nunc metus.",
    buttonUrl:"#",
	buttonLabel:"Find out more!",
  },

   {
	title:"Second Card",
	imageUrl:"https://images.pexels.com/photos/2234002/pexels-photo-2234002.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
	description:"Sed a vehicula ipsum. Nunc eget pellentesque mauris. In id nunc metus.",
    buttonUrl:"#",
	buttonLabel:"Find out more!",
  },

  {
	title:"Third Card",
	imageUrl:"https://images.pexels.com/photos/130621/pexels-photo-130621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
	description:"Sed a vehicula ipsum. Nunc eget pellentesque mauris. In id nunc metus.",
    buttonUrl:"#",
	buttonLabel:"Find out more!",
  },

  {
	title:"Fourth Card",
	imageUrl:"https://images.pexels.com/photos/1086584/pexels-photo-1086584.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
	description:"Sed a vehicula ipsum. Nunc eget pellentesque mauris. In id nunc metus.",
    buttonUrl:"#",
	buttonLabel:"Find out more!",
  }
];


	return (
		<div>
			<Navbar/>
			<Jumbotron/>
			<div className="container d-flex gap-5 mt-4">
			  {infoCard.map((card,index) => (
					 <Card 
					 key={index}
					 title={card.title} 
					 imageUrl={card.imageUrl} 
					 description={card.description} 
					 buttonUrl={card.buttonUrl} 
					 buttonLabel={card.buttonLabel}
					 />
			   ))}
			</div>
		    <Footer/> 
		</div>
	);
};

export default Home;
