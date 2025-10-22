import { Link } from "react-router-dom";
import "./hotelcard.css";

export default function HotelCard({ name, city, price, rate, type, image_url }) {
    return (
        <article className="hotel-card">
            <img className="hotel-img" src={image_url} alt={name} />
            <div className="hotel-info">
                <h3>
                    <Link to={`/detail/${encodeURIComponent(name)}`} className="hotel-link">
                        {name} {/*encodeURIcomponent e.g: Town Hall East -> Town%Hall%East */}
                    </Link>
                </h3>
                <p className="hotel-city">{city}</p>
                <p className="hotel-price">Starting from ${price}</p>
                <div className="hotel-rating">
                    <span className="rate">{rate}</span>
                    <span className="type">{type}</span>
                </div>
            </div>
        </article>
    );
}