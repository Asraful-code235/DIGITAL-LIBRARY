import React from "react";
import { items } from "./navItems";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="NavbarItems">
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
        </ul>
        <div className="search-box">
          <input
            type="text"
            className="search-txt"
            placeholder="type to search"
          />
          <a href="#" className="search-btn">
            <i className="fa fa-search"></i>
          </a>
        </div>
        <div className="toggle">
          <div
            className="hamburger-container"
            onClick={() => {
              document
                .querySelector(".hamburger-container")
                .classList.toggle("active");
            }}
          >
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
