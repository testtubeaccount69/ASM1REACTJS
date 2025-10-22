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

            <h4>Options</h4>
            <div className="additional-field">
                <div className="field">
                    <label className="label-add">
                        <p className="big-text">Min price</p>
                        <p className="small-text">per night</p>
                    </label>
                    <input className="input-add" type="text" placeholder="0" />
                </div>

                <div className="field">
                    <label className="label-add">
                        <p className="big-text">Max price</p>
                        <p className="small-text">per night</p>
                    </label>
                    <input className="input-add" type="text" placeholder="0" />
                </div>

                <div className="field">
                    <label className="label-add">Adult</label>
                    <input className="input-add" type="text" placeholder="0" />
                </div>

                <div className="field">
                    <label className="label-add">Children</label>
                    <input className="input-add" type="text" placeholder="0" />
                </div>

                <div className="field">
                    <label className="label-add">Room</label>
                    <input className="input-add" type="text" placeholder="0" />
                </div>
            </div>
            <button className="update-btn" onClick={() => window.alert("Search result updated!")}>
                Search
            </button>
        </div>
    );
}

/*
            <div className="search-popupmini">
                <label className="label"><p className='big-text'>Min price</p><p className='small-text'>per night</p></label>
                <input className="input" type="text" placeholder="0" />
            </div>
            <div className="search-popupmini">
                <label className="label"><p className='big-text'>Min price</p><p className='small-text'>per night</p></label>
                <input className="input" type="text" placeholder="1" />
            </div>
            <div className="search-popupmini">
                <label className="label">Adult</label>
                <input className="input" type="text" placeholder="0" />
            </div>
            <div className="search-popupmini">
                <label className="label">Children</label>
                <input className="input" type="text" placeholder="1" />
            </div>
            <div className="search-popupmini">
                <label className="label">Room</label>
                <input className="input" type="text" placeholder="0" />
            </div>
            */