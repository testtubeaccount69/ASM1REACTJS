// src/pages/search/SearchPopup.jsx
import React from "react";
import "./search.css";

export default function SearchPopup() {
    return (
        <div className="search-popup">
            <h3>Search</h3>

            <label className="label">Destination</label>
            <input className="input" type="text" placeholder="Where are you going?" />

            <label className="label">Check-in Date</label>
            <input className="input" type="text" placeholder="Check-in — Check-out" />

            <label className="label">Guests</label>
            <input className="input" type="text" placeholder="2 adults · 0 children · 1 room" readOnly />

            <button className="update-btn" onClick={() => window.alert("Update search (stub)")}>
                Search
            </button>
        </div>
    );
}