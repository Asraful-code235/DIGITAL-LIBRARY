import React, { useState, useEffect } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import Aos from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import FirstNav from "./FirstNav";
function ItemsShow() {
  useEffect(() => {
    Aos.init({ duration: 2500 });
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
  const [searchTerm, setSearchTerm] = useState("");
  const [cse, setCse] = useState("");

  // getBooks();
  return (
    <section className="ImageGrid">
      <div className="search-box">
        <input
          type="text"
          className="search-txt"
          placeholder="type to search by title/category"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
        <p className="search-btn">
          <BsSearch fontSize="1.5rem" className="BsSearch" />
        </p>
      </div>
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
        <div className={`category-books-items ${isActiveDd ? "active" : ""}`}>
          <div className="category-container">
            <h1>All Category</h1>
            <div className="container-wrap">
              <li
                onClick={() => {
                  setCse("CSE");
                  console.log(cse);
                }}
              >
                CSE
              </li>
              <li>EEE</li>
              <li>STORY</li>
              <li>ACTION</li>
              <li>TEXTILE</li>
              <li>BBA</li>
              <li>LAW</li>
            </div>
          </div>
        </div>
      </div>
      <div className="GridContainer">
        {bookList
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
