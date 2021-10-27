import React, { useState, useEffect } from "react";
import axios from "axios";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function ItemDetails({ match }) {
  //   const [id] = useParams();
  useEffect(() => {
    getBooks();
    categoryBooks();

    // categoryBooks();
  }, []);
  const [bookLists, setBookLists] = useState([]);
  const getBooks = () => {
    axios
      .get(`http://localhost:3001/Books/${match.params.id}`)
      .then((response) => {
        setBookLists(response.data[0]);

        // console.log(response.data);
      });
  };
  const [categoryList, setCategoryList] = useState([]);
  const categoryBooks = () => {
    // console.log(match.params);
    axios
      .get(
        `http://localhost:3001/Books/${match.params.id}/${match.params.category}`
      )
      .then((response) => {
        setCategoryList(response.data);

        // console.log(response.data);
      });
  };
  //   getBooks();
  const [isActive, setActive] = useState(false);
  const [isClicked, setClicked] = useState(false);
  const handelParagraph = () => {
    if (isActive === false && isClicked === false) {
      setActive(!isActive);
      setClicked(!isClicked);
      // console.log("false");
    } else {
      setClicked(isClicked);
      // console.log("true");
    }
    // alert("clicked");
  };
  const [Clicked, setNewClicked] = useState(false);
  const [isVisible, setVisible] = useState(false);
  const handelClick = () => {
    if (Clicked === false && isVisible === false) {
      setNewClicked(!Clicked);
      setVisible(!isVisible);
    }
    // alert("clicked");
  };
  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div>
      <div className="itemDetails-container">
        <div className="item-info">
          <h1>Home &gt; Books &gt; {bookLists.Title}</h1>
          <div className="books-item-info">
            <div className="img-book-container">
              {bookLists && (
                <img
                  src={`http://localhost:3001/public/images/${bookLists.image}`}
                  alt="img"
                />
              )}
              <button>View Pdf</button>
              <button>Download</button>
            </div>
            <div className="info-container">
              <h1>{bookLists.Title}</h1>
              <h3>
                Written by <span>{bookLists.Author}</span>
              </h3>
              <h3>
                Category <span> {bookLists.Category}</span>
              </h3>
            </div>
          </div>
        </div>
        <div className="author-about">
          <h1>About the author</h1>
          <h1 className="author">
            <div></div>
            {bookLists.Author}
          </h1>
          <div className="author-info-container">
            <p className={`author-container ${isActive ? "active" : ""}`}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
              veniam placeat inventore, iste molestiae obcaecati nulla
              consequuntur libero saepe dicta iure eum tempore! Officia modi
              quis necessitatibus pariatur, dolorem commodi.
            </p>
            <button
              onClick={handelParagraph}
              className={`btn-container ${isClicked ? "clicked" : ""}`}
            >
              Read more...
            </button>
          </div>
        </div>
        <div className="related-works">
          <div className="related-books">
            <div className="relatedHeader">
              <h1>Related to Category</h1>
            </div>
            <div className="related-container">
              <h1>Related Books</h1>
            </div>
            <div className={`GridContainer ${Clicked ? "active" : ""}`}>
              {categoryList.map((val) => {
                return (
                  <div
                    className="containerBooks"
                    key={val.id}
                    onClick={refreshPage}
                  >
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
            <button
              onClick={handelClick}
              className={`btn-view ${isVisible ? "active" : ""}`}
            >
              View More
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ItemDetails;
