import React from "react";
import ItemsShow from "./ItemsShow";
import bookpic1 from "./images/bookpic1.jpg";
function Books() {
  return (
    <>
      <div className="books-container">
        <div className="books-info">
          <div className="info">
            <h1>Enjoy popular books of your choice</h1>
            <p>
              Get instant access to millions of eBooks,Pdf,magazines at your
              home
            </p>
            <button className="btn-subscribe">Sign Up</button>
          </div>
        </div>
      </div>
      <ItemsShow />
    </>
  );
}

export default Books;
