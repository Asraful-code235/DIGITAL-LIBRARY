import React from "react";
import bookpic2 from "../src/images/bookpic2.jpg";

function FrontendCover() {
  return (
    <div>
      <div className="linkToBooks-container">
        <div className="info-wrap">
          <h1>THE BEST BOOKS AND MAGAZINES ARE WAITING FOR YOU </h1>
          <img src={bookpic2} alt="" />
        </div>
      </div>
    </div>
  );
}

export default FrontendCover;
