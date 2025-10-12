import React from "react";
import cities from "../data/city.json"; //call / declare the ariable for the imported Json data
import "./featuredcities.css";

function CityCard({ name, subText, image }) {

    return (
        <article className="city-card">
            <img className="city-img" src={image} alt={name} />
            <div className="city-text">
                <h3>{name}</h3>
                <p>{subText}</p>
            </div>
        </article>
    );
}

export default function FeaturedCities() {
    return (
        <section className="featured-cities">

            <div className="cities-grid">
                {cities.map((city, index) => (
                    <CityCard key={index} {...city} />
                ))}
            </div>
        </section>
    );
}