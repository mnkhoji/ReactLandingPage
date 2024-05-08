import React from "react";
import  Navbar1  from "./navbar.jsx";
import Footer1 from "./footer.jsx";
import CardHolder1 from "./cardHolder.jsx";
import Hero1 from "./hero.jsx";
//include images into your bundle


//create your first component
const Home = () => {
	return (
		<div className="bGround">
		<Navbar1/>
		<Hero1/>
		<CardHolder1/>

		<Footer1/>
		</div>
	);
};

export default Home;
