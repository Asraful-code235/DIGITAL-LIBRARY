import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Login(props) {
  const history = useHistory();
  const [isFlip, setFlip] = useState(false);
  const handelFlip = () => {
    setFlip(!isFlip);
  };
  const [isEmail, setEmail] = useState("");
  const [isPassword, setPassword] = useState("");
  const [successful, setSetSuccessful] = useState("");
  const [active, setSetActive] = useState(false);

  const authInput = () => {
    axios
      .post("http://localhost:3001/authentication", {
        email: isEmail,
        password: isPassword,
      })
      .then((response) => {
        console.log("successful");
        setSetActive(true);
        setSetSuccessful("Account created");
      });
  };
  const [email, setEmailReg] = useState("");
  const [password, setPasswordReg] = useState("");
  const [verified, setVerified] = useState(false);

  // const [loginStatus, setLoginStatus] = useState([]);

  const login = () => {
    axios
      .post("http://localhost:3001/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        if (response.data.message) {
          setVerified(true);
          // setLoginStatus(response.data.message);
          // console.log(response.data.message);
          // console.log(isAuth);
        } else {
          // setLoginStatus(response.data[0]);
          // console.log(response.data[0].email);
          // console.log(response.data[0].password);
          // setIsAuth(isAuth);
          history.push("/Dashboard");
          // isAuth = true;
          // console.log("clicked");
          // console.log(isAuth);
        }
        // console.log(loginStatus);
      });
  };
  const [btnText, setBtnText] = useState("SIGN UP");
  const [headerText, setHeaderBtn] = useState("Dont have an account? ");
  const [btnParagraph, setBtnParagraph] = useState(
    "Click the button bellow to go to sign up page."
  );
  const handelInfo = () => {
    if (btnText === "SIGN UP") {
      setBtnText("LOG IN");
      setHeaderBtn("Have an account?");
      setBtnParagraph("Click the button bellow to go to sign up page.");
    } else {
      setBtnText("SIGN UP");
      setHeaderBtn("Dont have an account?");
      setBtnParagraph("Click the button bellow to go to log in page.");
    }
  };
  // const [isAuth, setIsAuth] = useState(false);

  return (
    <div className="loginPage">
      <div className="login-container">
        <div className="login-info">
          <div className="header-info">
            <h1>{headerText}</h1>
          </div>
          <div className="normal-info">
            <p>{btnParagraph}</p>
          </div>
          <button
            className="btn-signup"
            onClick={() => {
              handelFlip();
              handelInfo();
              setEmailReg("");
              setPasswordReg("");
              setVerified("");
              setSetSuccessful("");
            }}
          >
            {btnText}
          </button>
        </div>
        <div className="login-wrap">
          <div className={`inner ${isFlip ? "active" : ""}`}>
            <div className="auth">
              <div className={`auth-Verify ${verified ? "active" : ""}`}>
                <h1>Wrong Username/Password</h1>
              </div>
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
                {/* `${!isAuth ? "/Dashboard" : "/admin"}` */}

                {/* <Link to="/Dashboard"> */}
                <button
                  // disabled={isAuth}
                  type="submit"
                  className="signIn"
                  onClick={login}
                >
                  log in
                </button>
                {/* </Link> */}
              </div>
              <div className="password-extract">
                {/* <h3>Forgot your password ?</h3> */}
              </div>
              {/* {loginStatus.map((loginStatus) => {
                  <h1>{loginStatus.email}</h1>;
                })} */}
            </div>
            <div className="signUp-container">
              <div className={`auth-Verify ${active ? "active" : ""}`}>
                {successful && <h1>{successful}</h1>}
              </div>
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
                <button
                  type="submit"
                  className="signIn"
                  onClick={() => {
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
      {/* <Routers>
        <Switch>
          <ProtectedRoute
            path="/Dashboard"
            exact
            component={Dashboard}
            isAuth={isAuth}
          />
        </Switch>
      </Routers> */}
    </div>
  );
}

export default Login;
