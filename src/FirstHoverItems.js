import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

function FirstHoverItems({ match }) {
  useEffect(() => {
    getBooks();
    latest();
    // categoryBooks();
    handelParams();

    // categoryBooks();
  }, []);
  //   console.log(match.params);
  const [searchTerm, setSearchTerm] = useState("");
  const [paramsId, setParamsId] = useState(0);
  const [getItems, setBookLists] = useState([]);
  const handelParams = () => {
    // setParamsId(match.params.id);
    console.log(match.params.Category);
  };
  const getBooks = () => {
    axios
      .get(`http://localhost:3001/items/${match.params.Category}`)
      .then((response) => {
        setBookLists(response.data);

        // console.log(response.data);
      });
  };
  const [latestBooks, setLatestBooks] = useState([]);
  const latest = () => {
    axios.get("http://localhost:3001/latest").then((response) => {
      setLatestBooks(response.data);
      console.log(response.data);
    });
  };
  return (
    <div className="related-works-item">
      <div className="related-books-item">
        <div className="relatedHeader">
          <h1>Related to Category &gt; {match.params.Category}</h1>
        </div>
        <div className="related-container">
          <h1>Related Books</h1>
        </div>
        <div className="search-box">
          <input
            type="text"
            className="search-txt"
            placeholder="type to search by title"
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
          <p className="search-btn">
            <BsSearch fontSize="1.5rem" className="BsSearch" />
          </p>
        </div>
        {/* ${Clicked ? "active" : ""}` */}
        <div className="relatedBooks-container">
          <div className={`GridContainer-category `}>
            {getItems
              .filter((val) => {
                if (searchTerm == "") {
                  return val;
                } else if (
                  val.Category.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return val;
                } else if (
                  val.Title.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return val;
                }
              })
              .map((val) => {
                return (
                  <div
                    key={val.id}
                    // onClick={refreshPage}
                  >
                    <Link to={`/Books/${val.id}/${val.Category}`}>
                      <div className="containerBooks">
                        <div className="imgContainer">
                          <div className="book-grid">
                            <img
                              src={`http://localhost:3001/public/images/${val.image}`}
                              alt="img"
                            />
                          </div>
                        </div>
                        <div className="info">
                          <div className="header">
                            <h1>{val.Title}</h1>
                          </div>
                          <p>{val.Author}</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
          </div>
          <div className="related-books-container">
            <h1>Latest Books</h1>
            {latestBooks.map((val) => {
              return (
                <div key={val.id} className="latestBooks">
                  <Link to={`/Books/${val.id}/${val.Category}`}>
                    <div className="imgContainer">
                      <div className="book-grid">
                        <img
                          src={`http://localhost:3001/public/images/${val.image}`}
                          alt="img"
                        />
                      </div>
                    </div>
                    <div className="info">
                      <div className="header">
                        <h1>{val.Title}</h1>
                      </div>
                      <p>{val.Author}</p>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstHoverItems;
