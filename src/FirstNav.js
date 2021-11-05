import React, { useState, useEffect } from "react";
import { items } from "./navItems";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import axios from "axios";

function FirstNav({ data }) {
  useEffect(() => {
    getBooks();
    return () => {
      getBooks();
    };
  }, []);
  const [isActive, setActive] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [Toggle, setToggle] = useState(false);
  const handelHamburger = () => {
    setActive(!isActive);
    setOpen(!isOpen);
    setToggle(!Toggle);
  };
  const [searchTerm, setSearchTerm] = useState("");
  const [wordEntered, setWordEntered] = useState("");
  const [bookList, setBookList] = useState([]);
  const getBooks = () => {
    axios.get("http://localhost:3001/books").then((response) => {
      setBookList(response.data);

      // console.log("blocked");
    });
  };
  const clearInput = () => {
    setWordEntered("");
  };
  // const handelFilter = (e) => {
  //   const searchWord = e.target.value;
  //   const newFilter = bookList.filter((val) => {
  //     return val.Title.toLowerCase().includes(searchWord.toLowerCase());
  //   });
  //   setFilteredData(newFilter);
  // };
  return (
    <>
      <nav className={`Navbar-container ${isOpen ? "active" : ""}`}>
        <div className="NavbarItems">
          <Link to={"/"}>
            <div className="menu-icon">
              <img src="./women.PNG" alt="" />
              <h1 className="navbar-logo">
                DIGITAL <span>Library</span>
              </h1>
            </div>
          </Link>
          <ul className="nav-menu">
            {items.map((item) => {
              return (
                <div key={item.id}>
                  <Link to={`/${item.title}`}>
                    <li>
                      <p className={item.cName} href={item.url}>
                        {item.title}
                      </p>
                    </li>
                  </Link>
                </div>
              );
            })}
            {/* <Link to="/signup">
              <button className="signupFirst">Sign Up</button>
            </Link> */}
          </ul>
          <div className="search">
            <div className="search-box-main">
              <input
                type="text"
                className="search-txt"
                placeholder="type to search"
                value={wordEntered}
                onChange={(event) => {
                  setSearchTerm(event.target.value);
                  setWordEntered(event.target.value);
                }}
              />
              <a href="#" className="search-btn">
                <i className="fa fa-search"></i>
              </a>
            </div>
            {searchTerm.length != 0 && (
              <div className="dataResult">
                {bookList
                  .filter((val) => {
                    if (searchTerm == "") {
                      return val;
                    } else if (
                      val.Category.toLowerCase().includes(
                        searchTerm.toLowerCase()
                      )
                    ) {
                      return val;
                    } else if (
                      val.Title.toLowerCase().includes(searchTerm.toLowerCase())
                    ) {
                      return val;
                    }
                  })
                  .slice(0, 10)
                  .map((val) => {
                    return (
                      <div className="containerBooks" key={val.id}>
                        <Link to={`Books/${val.id}/${val.Category}`}>
                          {/* <div className="imgContainer">
                            <div className="book-grid">
                              <img
                                src={`http://localhost:3001/public/images/${val.image}`}
                                alt="img"
                              />
                            </div>
                          </div> */}
                          {/* <div className="info"> */}
                          {/* <div className="header"> */}
                          <h1 onClick={clearInput}>{val.Title}</h1>
                          {/* </div> */}
                          {/* <p>{val.Author}</p> */}
                          {/* <p>Category:{val.Category}</p> */}
                          {/* <div className="btn_container"></div> */}
                          {/* </div> */}
                        </Link>
                      </div>
                    );
                  })}
              </div>
            )}
          </div>

          <div className="toggle">
            <div
              className={`hamburger-container ${isActive ? "active" : ""}`}
              onClick={handelHamburger}
            >
              <span className="line"></span>
              <span className="line"></span>
              <span className="line"></span>
            </div>
          </div>
        </div>
        {/* includes mobile hamburger menu */}
        <div className={`ham-container ${Toggle ? "active" : ""}`}>
          <div className="hamburgerOpen ">
            <div className="ham-info ">
              {/* <div className="search-box">
                <input
                  type="text"
                  className="search-txt"
                  placeholder="type to search"
                />
                <p className="search-btn">
                  <BsSearch fontSize="1.5rem" className="BsSearch" />
                </p>
              </div> */}
              <ul className="mobile-nav-menu">
                {items.map((item) => {
                  return (
                    <div key={item.id}>
                      <Link to={`/${item.title}`}>
                        <li>
                          <p className={item.cName} href={item.url}>
                            {item.title}
                          </p>
                        </li>
                      </Link>
                    </div>
                  );
                })}
                <Link to="/signup">
                  <button className="signupFirst">Sign Up</button>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default FirstNav;
