import React, { useState } from "react";
import { items } from "./navItems";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

function FirstNav() {
  const [isActive, setActive] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [Toggle, setToggle] = useState(false);
  const handelHamburger = () => {
    setActive(!isActive);
    setOpen(!isOpen);
    setToggle(!Toggle);
  };
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
          <div className="search-box">
            <input
              type="text"
              className="search-txt"
              placeholder="type to search"
            />
            <p className="search-btn">
              <BsSearch fontSize="1.5rem" className="BsSearch" />
            </p>
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
              <div className="search-box">
                <input
                  type="text"
                  className="search-txt"
                  placeholder="type to search"
                />
                <p className="search-btn">
                  <BsSearch fontSize="1.5rem" className="BsSearch" />
                </p>
              </div>
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
