import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import FrontendCover from "./FrontendCover";
import Books from "./Books";
import Footer from "./Footer";
import About from "./About";
import Dashboard from "./Dashboard";
import ItemDetails from "./ItemDetails";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Signup from "./Signup";
import ProtectedRoute from "./ProtectedRoute";
function App() {
  return (
    <Router>
      <div>
        <Route path="/" exact component={Navbar} />
        <Route path="/" exact component={Hero} />
        <Route path="/" exact component={FrontendCover} />
        <Route path="/" exact component={Footer} />
        <Route path="/Books" component={Navbar} />
        <Route path="/Books" exact component={Books} />
        <Route path="/Books/:id/:category" exact component={ItemDetails} />
        <Route path="/about" exact component={About} />

        <Route path="/login" exact component={Signup} />
        {/* <Route path="/login" exact component={Login} /> */}
        <Route path="/Dashboard" exact component={Dashboard} />
      </div>
    </Router>
  );
}

export default App;
