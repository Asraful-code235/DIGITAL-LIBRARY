import React from "react";
import { ImBooks } from "react-icons/im";
import { AiFillFilePdf } from "react-icons/ai";
import { BsJournalBookmark } from "react-icons/bs";
import { FiUpload } from "react-icons/fi";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function FrontendInfo() {
  return (
    <>
      <div className="info-container">
        <h1>All in one simple touch </h1>
        <div className="info-grid">
          <div className="container">
            <ImBooks color="#57617a" />
            <p>Books</p>
          </div>
          <div className="container">
            <BsJournalBookmark color="#57617a" />
            <p>Magazines</p>
          </div>
          <div className="container">
            <AiFillFilePdf color="#57617a" />
            <p>Pdf</p>
          </div>
          <div className="container">
            <FiUpload color="#57617a" />
            <p>Upload</p>
          </div>
        </div>
      </div>
      <div className="frontend-cover">
        <div className="information">
          <h1>THE BEST BOOKS AND MAGAZINES ARE WAITING FOR YOU</h1>
          <div>
            <Link to="/Subscription">
              <Button variant="contained">Subscribe</Button>
            </Link>
          </div>
        </div>
        <div className="information-img">
          <img src="./mobile.PNG" alt="mobile" />
        </div>
      </div>
    </>
  );
}

export default FrontendInfo;
