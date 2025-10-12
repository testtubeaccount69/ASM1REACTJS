import React from "react";
import './header.css';

function Header() {
    const handleSearch = () => {
        // create a variable so that when clicking Search, redirect to /search - add this to the function below
        window.location.replace("/search");
    };

    return (
        <header className="header">
            <h1 >A life time of discount? It's genius.</h1>
            <h3>Get rewarded for your travel - unlock instant savings of 10% or more with a free account</h3>
            <div className="header-form">
                <div className="formItem">
                    <i className="fa fa-bed"></i>
                    <input className="header-input" type="text" placeholder="Where are you going?" />
                </div>

                <div className="formItem date-range">
                    <i className="fa fa-calendar"></i>
                    <input type="date" placeholder="Check-in" />
                    <span className="date-separator">to</span>
                    <input type="date" placeholder="Check-out" />
                </div>

                <div className="formItem">
                    <i className="fa fa-user"></i>
                    <input className="header-input" type="number" placeholder="2 adults · 0 children · 1 room" />
                </div>

                <button onClick={handleSearch}>Search</button>
            </div>
        </header>
    );
}

export default Header;
