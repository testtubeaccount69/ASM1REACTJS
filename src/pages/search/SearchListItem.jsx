// src/pages/search/SearchListItem.jsx
import React from "react";
import "./search.css";

export default function SearchListItem({
    name,
    distance,
    tag,
    type,
    description,
    free_cancel,
    price,
    rate,
    rate_text,
    image_url,
}) {
    // fix "./images/..." -> "/images/..." if needed
    const img = image_url && image_url.startsWith("./") ? image_url.replace("./", "/") : image_url;

    return (
        <article className="search-item">
            <img className="search-item-img" src={img} alt={name} />

            <div className="search-item-body">
                <h3 className="search-item-name" onClick={() => window.location.replace("/detail")}>
                    {name}
                </h3>
                <p className="search-item-distance">{distance}</p>
                {tag && <p className="search-item-tag">{tag}</p>}
                <p className="search-item-desc">{description}</p>
                <p className="search-item-type">{type}</p>

                {free_cancel && <p className="search-item-cancel">Free cancellation</p>}
                {free_cancel && <p className="search-item-cancel-sub">You can cancel later, so lock in this great price today!</p>}
            </div>

            <div className="search-item-right">
                <div className="search-item-rate">

                    <small className="rate-text">{rate_text}</small>
                    <span className="rate-num">{rate}</span>
                </div>
                <div className="search-item-price">${price}</div>
                <p className="search-item-tax">Includes taxes and fees</p>

            </div>
        </article>
    );
}