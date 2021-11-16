import React from "react";
import Footer from "./Footer";
import Button from "@mui/material/Button";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineGooglePlus } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiOutlineArrowDown } from "react-icons/ai";

function Subcription() {
  return (
    <div>
      <Subscribe />
      <Footer />
    </div>
  );
}
const Subscribe = () => {
  return (
    <div className="Subscribe-container">
      <div className="info-container-subscribe">
        <div className="into-item-left">
          <h1>Subscribe and Share</h1>
          <p>
            Read from the worlds best writers and <br /> stay connected with
            your
            <br /> favourit author
          </p>
          <Button className="Subscribe-btn">Subscribe Now</Button>
          <div className="icons">
            <i>
              <AiFillTwitterCircle className="subscribeBtnLink" />
            </i>
            <i>
              <AiOutlineGooglePlus className="subscribeBtnLink" />
            </i>
            <i>
              <BsFacebook className="subscribeBtnLink" />
            </i>
            <i>
              <AiOutlineInstagram className="subscribeBtnLink" />
            </i>
          </div>
          <div className="scroll-container">
            <h4>Scroll Down</h4>
            <i>
              <AiOutlineArrowDown className="subscribeBtnLink" />
            </i>
          </div>
        </div>
      </div>
      <div className="image-container">
        <img src="./mobile.PNG" alt="" />
      </div>
    </div>
  );
};

export default Subcription;
