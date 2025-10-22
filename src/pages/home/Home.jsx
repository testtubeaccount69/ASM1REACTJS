import React from "react";

import FeaturedCities from "../../components/featuredcities";
import PropertyTypes from "../../components/propertytypes"
import HotelList from "../../components/hotellist"

import './Home.css'


function Home() {
	return (
		<div className='home-primary'>

			<div className='container'>
				<FeaturedCities />
				<PropertyTypes />
				<HotelList />

				<h1>Home Page Content</h1>
			</div>
		</div>
	);
}

export default Home;