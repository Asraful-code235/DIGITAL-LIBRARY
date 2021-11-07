import React, { useState } from "react";
import { items } from "./navItems";
import { Link } from "react-router-dom";
import axios from "axios";
import { FaFacebookSquare } from "react-icons/fa";
import { AiOutlineGooglePlus } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";

import UserLogin from "./UserLogin";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import { MdInvertColorsOff } from "react-icons/md";

function Navbar() {
  const [isActive, setActive] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [Toggle, setToggle] = useState(false);
  const handelHamburger = () => {
    setActive(!isActive);
    setOpen(!isOpen);
    setToggle(!Toggle);
  };
  const [clicked, setClicked] = useState("SIGN UP");
  const handelBtn = () => {
    setClicked("LOGGED IN");
    console.log("clicked");
  };
  //login features
  const history = useHistory();
  const [rightPanelActive, setRightPanelActive] = useState(false);
  const handelRightPanel = () => {
    setRightPanelActive(!rightPanelActive);
  };
  const handelRightDeActive = () => {
    if (rightPanelActive) {
      setRightPanelActive(!rightPanelActive);
    } else {
    }
  };
  const [isAccountCreated, setAccountCreated] = useState("");
  const [LoggedIn, setLoggedIn] = useState("");
  const [isEmail, setEmailUser] = useState("");
  const [isPassword, setPasswordUser] = useState("");
  const handelUserInput = () => {
    axios
      .post("http://localhost:3001/user", {
        email: isEmail,
        password: isPassword,
      })
      .then((response) => {
        console.log("successful");

        setAccountCreated("Account created");
        // setSetSuccessful("Account created");
      });
  };
  //Authenticate users
  const [loginTrue, setLoginTrue] = useState([]);
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [activeLog, setActiveLog] = useState(false);
  const handelActive = () => {
    if (clicked === "Log Out") {
      setActiveLog(activeLog);
      setClicked("SIGN UP");
    } else {
      setActiveLog(!activeLog);
    }

    console.log(activeLog);
  };
  const handelUserLogin = () => {
    axios
      .post("http://localhost:3001/userLogin", {
        email: userEmail,
        password: userPassword,
      })
      .then((response) => {
        if (response.data.message) {
          setLoginTrue(response.data.message);
          setLoggedIn("Wrong username/password");
        } else {
          setLoginTrue(response.data[0]);
          console.log("Authenticated");
          setActiveLog(!activeLog);
          setClicked("Log Out");
          confirmClicked();
          // history.push("/");
        }
      });
  };
  const confirmClicked = () => {
    setClicked("Log Out");
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
            {/* <Link to="/user"> */}
            <button className="signupFirst" onClick={handelActive}>
              {clicked}
            </button>
            {/* </Link> */}
          </ul>
          {/* <div className="search-box">
            <input
              type="text"
              className="search-txt"
              placeholder="type to search"
            />
            <a href="#" className="search-btn">
              <i className="fa fa-search"></i>
            </a>
          </div> */}
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
        <div className={`ham-container ${Toggle ? "active" : ""}`}>
          <div className="hamburgerOpen ">
            <div className="ham-info ">
              {/* <div className="search-box">
                <div className="search">
                  <input
                    type="text"
                    className="search-txt"
                    placeholder="type to search"
                  />
                  <p className="search-btn">
                    <div className="btn-search">
                      <BsSearch fontSize="1.5rem" className="BsSearch" />
                    </div>
                  </p>
                </div>
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
                {/* <Link to="/signup"> */}
                <button className="signupFirst" onClick={handelBtn}>
                  {clicked}
                </button>
                {/* </Link> */}
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div className={`section ${activeLog ? "Active" : ""}`}>
        <div className="login-Container">
          <div
            className={`container ${
              rightPanelActive ? "right-panel-active" : ""
            }`}
            id="container"
          >
            <div className="form-container sign-up-container">
              <form action="#">
                <h1>Create Account</h1>
                <div className="social-container">
                  <Link className="social">
                    <i>
                      <FaFacebookSquare />
                    </i>
                  </Link>
                  <Link className="social">
                    <i>
                      <AiOutlineGooglePlus />
                    </i>
                  </Link>
                  <Link className="social">
                    <i>
                      <FaLinkedin />
                    </i>
                  </Link>
                </div>
                <span>or use your email for registration</span>
                {/* <input type="text" placeholder="Name" /> */}
                <input
                  type="email"
                  placeholder="Email"
                  onChange={(e) => {
                    setEmailUser(e.target.value);
                  }}
                />
                <input
                  type="password"
                  placeholder="Password"
                  onChange={(e) => {
                    setPasswordUser(e.target.value);
                  }}
                />
                <button onClick={handelUserInput}>Sign Up</button>
                <h4 className="Account-Created">{isAccountCreated}</h4>
              </form>
            </div>
            <div className="form-container sign-in-container">
              <form>
                <h1>Sign in</h1>
                <div className="social-container">
                  <Link className="social">
                    <i>
                      <FaFacebookSquare />
                    </i>
                  </Link>
                  <Link className="social">
                    <i>
                      <AiOutlineGooglePlus />
                    </i>
                  </Link>
                  <Link className="social">
                    <i>
                      <FaLinkedin />
                    </i>
                  </Link>
                </div>
                <span>or use your account</span>
                <span className="LoggedOut">{LoggedIn}</span>
                <input
                  type="email"
                  placeholder="Email"
                  onChange={(e) => {
                    setUserEmail(e.target.value);
                  }}
                />
                <input
                  type="password"
                  placeholder="Password"
                  onChange={(e) => {
                    setUserPassword(e.target.value);
                  }}
                />
                <Link>Forgot your password?</Link>
                <button onClick={handelUserLogin}>Sign In</button>
              </form>
            </div>
            <div className="overlay-container">
              <div className="overlay">
                <div className="overlay-panel overlay-left">
                  <h1>Welcome Back!</h1>
                  <p>
                    To keep connected with us please login with your personal
                    info
                  </p>
                  <button
                    className="ghost"
                    id="signIn"
                    onClick={() => {
                      handelRightDeActive();
                      setAccountCreated("");
                    }}
                  >
                    Sign In
                  </button>
                </div>
                <div className="overlay-panel overlay-right">
                  <h1>Hello</h1>
                  <p>Enter your personal details and start journey with us</p>
                  <button
                    className="ghost"
                    id="signUp"
                    onClick={() => {
                      handelRightPanel();
                      setLoggedIn("");
                    }}
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
