// import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
// import { Link } from "react-router-dom";
// import { FaFacebookSquare } from "react-icons/fa";
// import { AiOutlineGooglePlus } from "react-icons/ai";
// import { FaLinkedin } from "react-icons/fa";
// import axios from "axios";

// function UserLogin(props) {
//   const history = useHistory();
//   const [rightPanelActive, setRightPanelActive] = useState(false);
//   const handelRightPanel = () => {
//     setRightPanelActive(!rightPanelActive);
//   };
//   const handelRightDeActive = () => {
//     if (rightPanelActive) {
//       setRightPanelActive(!rightPanelActive);
//     } else {
//     }
//   };
//   const [isAccountCreated, setAccountCreated] = useState("");
//   const [LoggedIn, setLoggedIn] = useState("");
//   const [isEmail, setEmailUser] = useState("");
//   const [isPassword, setPasswordUser] = useState("");
//   const handelUserInput = () => {
//     axios
//       .post("http://localhost:3001/user", {
//         email: isEmail,
//         password: isPassword,
//       })
//       .then((response) => {
//         console.log("successful");

//         setAccountCreated("Account created");
//         // setSetSuccessful("Account created");
//       });
//   };
//   //Authenticate users
//   const [loginTrue, setLoginTrue] = useState([]);
//   const [userEmail, setUserEmail] = useState("");
//   const [userPassword, setUserPassword] = useState("");

//   const handelUserLogin = () => {
//     axios
//       .post("http://localhost:3001/userLogin", {
//         email: userEmail,
//         password: userPassword,
//       })
//       .then((response) => {
//         if (response.data.message) {
//           setLoginTrue(response.data.message);
//           setLoggedIn("Wrong username/password");
//         } else {
//           setLoginTrue(response.data[0]);
//           // console.log(response.data[0].email);
//           // console.log(response.data[0].password);
//           // setIsAuth(isAuth);
//           console.log("Authenticated");
//           // isActive = true;
//           history.push("/");
//           // isAuth = true;
//           // console.log("clicked");
//           // console.log(isAuth);
//         }
//         // console.log(loginStatus);
//       });
//   };
//   const data = props.clicked;
//   console.log(data);

//   return (
//     <div
//       className="login-Container
//     "
//     >
//       <div
//         className={`container ${rightPanelActive ? "right-panel-active" : ""}`}
//         id="container"
//       >
//         <div className="form-container sign-up-container">
//           <form action="#">
//             <h1>Create Account</h1>
//             <div className="social-container">
//               <Link className="social">
//                 <i>
//                   <FaFacebookSquare />
//                 </i>
//               </Link>
//               <Link className="social">
//                 <i>
//                   <AiOutlineGooglePlus />
//                 </i>
//               </Link>
//               <Link className="social">
//                 <i>
//                   <FaLinkedin />
//                 </i>
//               </Link>
//             </div>
//             <span>or use your email for registration</span>
//             {/* <input type="text" placeholder="Name" /> */}
//             <input
//               type="email"
//               placeholder="Email"
//               onChange={(e) => {
//                 setEmailUser(e.target.value);
//               }}
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               onChange={(e) => {
//                 setPasswordUser(e.target.value);
//               }}
//             />
//             <button onClick={handelUserInput}>Sign Up</button>
//             <h4 className="Account-Created">{isAccountCreated}</h4>
//           </form>
//         </div>
//         <div className="form-container sign-in-container">
//           <form>
//             <h1>Sign in</h1>
//             <div className="social-container">
//               <Link className="social">
//                 <i>
//                   <FaFacebookSquare />
//                 </i>
//               </Link>
//               <Link className="social">
//                 <i>
//                   <AiOutlineGooglePlus />
//                 </i>
//               </Link>
//               <Link className="social">
//                 <i>
//                   <FaLinkedin />
//                 </i>
//               </Link>
//             </div>
//             <span>or use your account</span>
//             <span className="LoggedOut">{LoggedIn}</span>
//             <input
//               type="email"
//               placeholder="Email"
//               onChange={(e) => {
//                 setUserEmail(e.target.value);
//               }}
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               onChange={(e) => {
//                 setUserPassword(e.target.value);
//               }}
//             />
//             <Link>Forgot your password?</Link>
//             <button onClick={handelUserLogin}>Sign In</button>
//           </form>
//         </div>
//         <div className="overlay-container">
//           <div className="overlay">
//             <div className="overlay-panel overlay-left">
//               <h1>Welcome Back!</h1>
//               <p>
//                 To keep connected with us please login with your personal info
//               </p>
//               <button
//                 className="ghost"
//                 id="signIn"
//                 onClick={() => {
//                   handelRightDeActive();
//                   setAccountCreated("");
//                 }}
//               >
//                 Sign In
//               </button>
//             </div>
//             <div className="overlay-panel overlay-right">
//               <h1>Hello</h1>
//               <p>Enter your personal details and start journey with us</p>
//               <button
//                 className="ghost"
//                 id="signUp"
//                 onClick={() => {
//                   handelRightPanel();
//                   setLoggedIn("");
//                 }}
//               >
//                 Sign Up
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default UserLogin;
