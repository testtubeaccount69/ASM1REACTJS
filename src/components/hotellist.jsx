import React from "react";
import hotels from "../data/hotel_list.json";
import HotelCard from "./hotelcard";
import "./hotellist.css";

export default function HotelList() {
    return (
        <section className="hotel-list">
            <h2 className="section-title">Homes guests love</h2>
            <div className="hotels-grid">
                {hotels.map((hotel, index) => (
                    <HotelCard key={index} {...hotel} />
                ))}
            </div>
        </section>
    );
}