import React from "react";
import { Link } from "react-router-dom";

function FrontendCover() {
  return (
    <div>
      <Link to={"/Books"}>
        <div className="linkToBooks-container">
          <div className="info-wrap">
            <div className="info">
              <h1>THE BEST BOOKS AND MAGAZINES ARE WAITING FOR YOU </h1>
              <Link to={"/Subcription"}>
                <button className="sign-up">Subscribe</button>
              </Link>
            </div>
            {/* <img src={bookpic2} alt="pic" /> */}
          </div>
        </div>
      </Link>
    </div>
  );
}

export default FrontendCover;
