// src/pages/detail/Detail.jsx
import React from "react";
import detailData from "../../data/detail.json";
import "./detail.css";

/**
 * Convert JSON image path (like "./images/foo.jpg")
 * to a public path "/images/foo.jpg" so the browser can fetch it.
 */
const toPublicPath = (p) => {
  if (!p) return p;
  if (p.startsWith("/")) return p;            // already correct
  if (p.startsWith("./")) return p.replace(/^\.\//, "/");
  return `/${p}`;
};

export default function Detail() {
  const d = detailData;

  if (!d) return <div>Detail data not found</div>;

  return (
    <div className="detail-container">
      <header className="detail-header">
        <h1 className="detail-title">{d.name}</h1>
        <button className="book-btn">Reserve or Book Now!</button>
      </header>

      <p className="detail-address">{d.address}</p>
      <p className="detail-distance">{d.distance}</p>
      <p className="detail-price-highlight">{d.price}</p>

      {/* Gallery */}
      <div className="detail-gallery">
        {Array.isArray(d.photos) && d.photos.map((p, i) => (
          <img
            key={i}
            src={toPublicPath(p)}
            alt={`${d.name} photo ${i + 1}`}
            className="detail-gallery-img"
          />
        ))}
      </div>

      {/* Main info + sidebar */}
      <div className="detail-info">
        <div className="detail-description">
          <h2>{d.title}</h2>
          <p>{d.description}</p>
        </div>

        <aside className="detail-sidebar">
          <div className="detail-sidebar-box">
            <h3>Perfect for a 9-night stay!</h3>
            <p>
              Located in the real heart of the city, this property has an
              excellent location score.
            </p>
            <h2 className='price-nine-night'>${d.nine_night_price} <p className="nine-nights">(9 nights)</p></h2>
            <button className="book-btn">Reserve or Book Now!</button>
          </div>
        </aside>
      </div>
    </div>
  );
}
