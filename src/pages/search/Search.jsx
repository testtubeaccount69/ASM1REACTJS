import React from "react";


import SearchPopup from "./SearchPopup.jsx";
import SearchList from "./SearchList";

import "./search.css";

export default function Search() {
  return (
    <>

      <main className="search-page container">
        <div className="search-layout">
          <aside className="search-left">
            <SearchPopup />
          </aside>

          <section className="search-right">
            <SearchList />
          </section>
        </div>
      </main>

    </>
  );

}