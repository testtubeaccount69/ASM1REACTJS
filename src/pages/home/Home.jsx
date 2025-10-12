import React from "react";
import Navbar from "../../components/navbar"; // adjust path
import Header from "../../components/header";
import FeaturedCities from "../../components/featuredcities";
import PropertyTypes from "../../components/propertytypes"
import HotelList from "../../components/hotellist"
import Subscribe from "../../components/subscribe"
import Footer from "../../components/footer"
import './Home.css'


function Home() {
	return (
		<div className='container'>
			<Navbar />
			<Header />
			<FeaturedCities />
			<PropertyTypes />
			<HotelList />
			<Subscribe />
			<Footer />
			<h1>Home Page Content</h1>
		</div>
	);
}

export default Home;