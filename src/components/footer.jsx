import React from "react";
import footerData from "../data/footer.json";
import "./footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                {footerData.map((section, index) => (
                    <ul key={index} className="footer-column">
                        {section.col_values.map((value, idx) => (
                            <li key={idx} className="footer-link">
                                {value}
                            </li> //col_values & col_number o file data
                        ))}
                    </ul>
                ))}
            </div>
        </footer>
    );
}