import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { GrPowerReset } from "react-icons/gr";
import { BiArrowBack } from "react-icons/bi";
import ProtectedRoute from "./ProtectedRoute";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "./Dashboard";

function Login() {
  useEffect(() => {
    if (isAuth) {
      login();
    }
    return () => {
      login();
    };
  }, []);
  const history = useHistory();
  const handelClick = () => {
    history.push("/login");
  };
  const [isFlip, setFlip] = useState(false);
  const handelFlip = () => {
    setFlip(!isFlip);
  };
  const [isEmail, setEmail] = useState("");
  const [isPassword, setPassword] = useState("");
  const authInput = () => {
    axios
      .post("http://localhost:3001/authentication", {
        email: isEmail,
        password: isPassword,
      })
      .then((response) => {
        console.log("successful");
      });
  };
  const [email, setEmailReg] = useState("");
  const [password, setPasswordReg] = useState("");
  const [isAuth, setAuth] = useState(false);
  const [loginStatus, setLoginStatus] = useState([]);

  const login = () => {
    axios
      .post("http://localhost:3001/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        if (response.data.message) {
          setLoginStatus(response.data.message);
        } else {
          setLoginStatus(response.data[0]);
          // alert("success");
          setAuth(!isAuth);
        }
        // console.log(response.data);
      });
  };

  function refresh() {
    window.location.reload(false);
  }
  return (
    <>
      <div className="login-container">
        <div className="login-wrap">
          <div className={`inner ${isFlip ? "active" : ""}`}>
            <div className="auth">
              <div className="email">
                <label htmlFor="">Email</label>
                <input
                  type="email"
                  value={email}
                  placeholder="Enter your email"
                  onChange={(event) => {
                    setEmailReg(event.target.value);
                  }}
                />
              </div>
              <div className="password">
                <label htmlFor="">Password</label>
                <input
                  type="password"
                  value={password}
                  placeholder="Enter your password"
                  onChange={(event) => {
                    setPasswordReg(event.target.value);
                  }}
                />
              </div>
              <div className="btn-container">
                <Link to={`${isAuth ? "/Dashboard" : "/login"}`}>
                  <button
                    disabled={!email}
                    type="submit"
                    className="signIn"
                    onClick={login}
                  >
                    Sign in
                  </button>
                </Link>
                <button type="submit" className="signUp" onClick={handelFlip}>
                  Sign Up
                </button>
              </div>
              <h3>Forgot your password ?</h3>
              {/* {loginStatus.map((loginStatus) => {
                  <h1>{loginStatus.email}</h1>;
                })} */}
            </div>
            <div className="signUp-container">
              <div className="email">
                <label htmlFor="">Email</label>
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />
              </div>
              <div className="password">
                <label htmlFor="">Password</label>
                <input
                  type="password"
                  required
                  placeholder="Enter your password"
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                />
              </div>
              <div className="btn-container">
                <Link to={"/login"}>
                  <button type="submit" className="signIn" onClick={refresh}>
                    <BiArrowBack color="#222" fontsize="1.3rem" />
                  </button>
                </Link>
                <button
                  type="submit"
                  className="signUp"
                  onClick={() => {
                    handelFlip();
                    authInput();
                  }}
                >
                  Sign Up
                </button>
                {/* <button
                  type="reset"
                  className="reset-btn"
                  onClick={refresh}
                  className="reset"
                >
                  <GrPowerReset fontsize="1.3rem" color="#fff" />
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
