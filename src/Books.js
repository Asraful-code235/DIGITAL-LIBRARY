import React from "react";
import ItemsShow from "./ItemsShow";
import { Link } from "react-router-dom";
function Books() {
  return (
    <>
      <div className="books-container">
        <div className="filter"></div>
        <div className="books-info">
          <div className="info">
            <h1>Enjoy popular books of your choice</h1>
            <p>
              Get instant access to millions of eBooks,Pdf,magazines at your
              home
            </p>
            <Link to="/">
              <button className="btn-subscribe">Subscribe</button>
            </Link>
          </div>
        </div>
      </div>
      <ItemsShow />
    </>
  );
}

export default Books;
