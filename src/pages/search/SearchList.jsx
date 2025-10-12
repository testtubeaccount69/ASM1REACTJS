import React from "react";
import searchData from "../../data/search.json"; // adjust path if your data location differs
import SearchListItem from "./SearchListItem";
import "./search.css";

export default function SearchList() {
    // defensive: if file is missing or empty
    if (!searchData || !Array.isArray(searchData) || searchData.length === 0) {
        return <div className="search-empty">No results found</div>;
    }

    return (
        <div className="search-list">
            {searchData.map((item, i) => (
                <SearchListItem key={i} {...item} />
            ))}
        </div>
    );
}