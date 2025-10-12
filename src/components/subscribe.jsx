import React from "react";
import "./subscribe.css";

export default function Subscribe() {
    return (
        <section className="subscribe">
            <h2 className="subscribe-title">Save time, save money!</h2>
            <p className="subscribe-text">
                Sign up and we'll send the best deals to you
            </p>
            <div className="subscribe-form">
                <input
                    type="email"
                    placeholder="Your Email"
                    className="subscribe-input"
                />
                <button className="subscribe-btn">Subscribe</button>
            </div>
        </section>
    );
}