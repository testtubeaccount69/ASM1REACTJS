import React from "react";
import './propertytypes.css';
import types from "../data/type.json";

function PropertyTypeCard({ name, count, image }) {
    return (
        <article className="property-card">
            <img className="property-img" src={image} alt={name} />
            <div className="property-text">
                <h3>{name}</h3>
                <p>{count} properties</p>
            </div>
        </article>
    );
}

// ✅ Main section component (plural)
export default function PropertyTypes() {
    return (
        <section className="property-types">
            <h2 className="section-title">Browse by property type</h2>
            <div className="types-grid">
                {types.map((type, index) => (
                    <PropertyTypeCard key={index} {...type} />
                ))}
            </div>
        </section>
    );
}