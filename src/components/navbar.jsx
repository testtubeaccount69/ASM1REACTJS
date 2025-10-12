import React from "react";
import "./navbar.css";
import navItems from "../data/navBar.json";

function Navbar() {
    return (
        <div className='navbar-all'>
            <div className="navbar">
                <div className="navbar-top">
                    <span className="logo">Booking Website</span>
                    <div className="navbar-right">
                        <button className="nav-btn">Register</button>
                        <button className="nav-btn">Login</button>
                    </div>
                </div>
            </div>
            <nav className="navbar">


                {navItems.map((item) => (
                    <div
                        key={item.type}
                        className={`nav-item ${item.active ? "active" : ""}`}
                    >
                        <i className={`fa ${item.icon}`}></i>
                        <span>{item.type}</span>
                    </div>
                ))}
            </nav>
        </div>
    );
}

export default Navbar;