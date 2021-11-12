import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Footer from "./Footer";

function About({ match }) {
  useEffect(() => {
    handelParams();
  }, []);
  // const [paramsId, setParamsId] = useState(0);

  const handelParams = () => {
    // setParamsId(match.params.id);
    console.log(match.params);
  };
  const [pdfList, setPdfList] = useState([]);
  const getPdf = () => {
    // console.log("words");
    axios
      .get(
        `http://localhost:3001/Books/${match.params.id}/${match.params.category}/pdf
        `
      )
      .then((response) => {
        setPdfList(response.data[0]);

        console.log(response.data[0]);
      });
  };
  return (
    <>
      <div className="about-container" style={{ height: "100vh" }}>
        <div className="download-info">
          <h2>Click here to download...</h2>

          <button onClick={getPdf} className="download">
            Download
            {pdfList.pdf && (
              <img
                src={`http://localhost:3001/public/${pdfList.pdf}`}
                alt="pdf"
              />
            )}
          </button>
          <Link to={`/Books/${match.params.id}/${match.params.category}`}>
            <button>Go back</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default About;
