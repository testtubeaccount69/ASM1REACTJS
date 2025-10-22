import React, { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "./header.css";

function Header() {
    const [openDate, setOpenDate] = useState(false); // show/hide popup
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: "selection",
        },
    ]);

    const handleSearch = () => {
        window.location.replace("/search");
    };

    return (
        <header className="header">
            <div className="headerContainer">
                <h1>A lifetime of discount? It's genius.</h1>
                <h3>
                    Get rewarded for your travel - unlock instant savings of 10% or more
                    with a free account
                </h3>
                <button className="header-login">Sign in / Register</button>

                <div className="header-form">
                    <div className="formItem">
                        <i className="fa fa-bed"></i>
                        <input
                            className="header-input"
                            type="text"
                            placeholder="Where are you going?"
                        />
                    </div>

                    {/* DATE RANGE SECTION */}
                    <div className="formItem date-range">
                        <i className="fa fa-calendar"></i>
                        <span
                            onClick={() => setOpenDate(!openDate)}
                            className="date-text"
                        >
                            {`${date[0].startDate.toLocaleDateString()} → ${date[0].endDate.toLocaleDateString()}`}
                        </span>

                        {/* Popup */}
                        {openDate && (
                            <div className="date-popup">
                                <DateRange
                                    editableDateInputs={true}
                                    onChange={(item) => setDate([item.selection])}
                                    moveRangeOnFirstSelection={false}
                                    ranges={date}
                                    minDate={new Date()}
                                    className="date"
                                />
                            </div>
                        )}
                    </div>

                    <div className="formItem">
                        <i className="fa fa-user"></i>
                        <input
                            className="header-input"
                            type="number"
                            placeholder="2 adults · 0 children · 1 room"
                        />
                    </div>

                    <button onClick={handleSearch}>Search</button>
                </div>
            </div>
        </header>
    );
}

export default Header;