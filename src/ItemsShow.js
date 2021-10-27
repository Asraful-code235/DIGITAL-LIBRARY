import React, { useState, useEffect } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import Aos from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { Link } from "react-router-dom";
function ItemsShow() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
    getBooks();
  }, []);
  const [bookList, setBookList] = useState([]);
  const getBooks = () => {
    axios.get("http://localhost:3001/books").then((response) => {
      setBookList(response.data);

      // console.log("blocked");
    });
  };

  const [isActiveDd, setActiveDd] = useState(false);
  const handelDropdown = () => {
    setActiveDd(!isActiveDd);
    if (isActiveDd === true) {
      setActiveDd(isActiveDd);
    }
  };
  const [linkActive, setLinkActive] = useState(false);
  const handelLink = (e) => {
    if (linkActive === false && linkAct === true && isActiveDd === true) {
      setLinkActive(linkActive);
      setLinkAct(!linkAct);
      // setActiveDd(isActiveDd);

      // console.log("!linkactive and linkact");
    } else if (linkAct === true && linkActive === true && isActiveDd === true) {
      setLinkActive(!linkActive);
      setLinkAct(!linkAct);
      setActiveDd(!isActiveDd);

      // console.log("linkact true");
    } else if (linkActive === false && linkAct === false && linkAc === false) {
      // console.log("false");
    } else if (linkActive === true && linkAc === true) {
      setLinkActive(!linkActive);
      setLinkAc(!linkAc);
    }
  };
  const [linkAct, setLinkAct] = useState(false);
  const handelSecond = () => {
    if (linkAct === false && linkActive === false) {
      setLinkAct(!linkAct);
      setLinkActive(!linkActive);
      // setLinkAc(!linkAc);
      // console.log("!linkact and !linkactive");
    } else if (linkAct === true && linkAc === true) {
      setLinkAct(linkAct);
      setLinkAc(!linkAc);
      // console.log("linkact");
    } else if (linkAct === false && linkAc === true) {
      setLinkAct(!linkAct);
      setLinkAc(!linkAc);
      // console.log("k");
    }
  };
  const [linkAc, setLinkAc] = useState(false);
  const handelThird = () => {
    if (linkActive === false && linkAc === false) {
      setLinkAc(!linkAc);
      setLinkActive(!linkActive);
      // setActiveDd(isActiveDd);

      // console.log("works");
    } else if (linkAct === true && linkAc === false && isActiveDd === true) {
      // console.log("nice");
      setLinkAct(!linkAct);
      setLinkAc(!linkAc);
      setActiveDd(!isActiveDd);
    }
  };
  // getBooks();
  return (
    <section data-aos="fade-up" className="ImageGrid">
      <div className="control">
        <ul>
          <li
            className={`${linkActive ? "" : "defaultActive"}`}
            onClick={handelLink}
          >
            OVERVIEW
          </li>
          <div className="category-books" onClick={handelDropdown}>
            <li
              onClick={handelSecond}
              className={`${!linkAct ? "" : "defaultActive"}`}
            >
              CATEGORY
            </li>
            <div className="img">
              <IoMdArrowDropdown color="#fff" fontSize="1.2rem" />
            </div>
          </div>
          <li
            className={`${!linkAc ? "" : "defaultActive"}`}
            onClick={handelThird}
          >
            LATEST
          </li>
        </ul>
        <ul className={`category-books-items ${isActiveDd ? "active" : ""}`}>
          <li>CSE</li>
          <li>EEE</li>
          <li>STORY</li>
        </ul>
      </div>
      <div className="GridContainer">
        {bookList.map((val) => {
          return (
            <div className="containerBooks" key={val.id}>
              <Link to={`Books/${val.id}/${val.Category}`}>
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
                  {/* <p>Category:{val.Category}</p> */}
                  <div className="btn_container"></div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default ItemsShow;
