import React from "react";
import { ImBooks } from "react-icons/im";
import { AiFillFilePdf } from "react-icons/ai";
import { BsJournalBookmark } from "react-icons/bs";
import { FiUpload } from "react-icons/fi";

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
    </>
  );
}

export default FrontendInfo;
