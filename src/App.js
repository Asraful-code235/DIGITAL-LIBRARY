import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";

import Books from "./Books";
import Footer from "./Footer";
import About from "./About";
import DigitalLInfo from "./DigitalLInfo";
import Dashboard from "./Dashboard";
import ItemDetails from "./ItemDetails";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signup from "./Signup";
import ProtectedRoute from "./ProtectedRoute";

import Contact from "./Contact";

import FirstHoverItems from "./FirstHoverItems";

import PdfViewer from "./PdfViewer";
import Subcription from "./Subcription";
import Join from "./Join";
function App(props) {
  return (
    <Router>
      <Switch>
        <Route path="/admin" exact component={Signup} />
        <Navbar />
      </Switch>

      {/* <Route path="/" exact component={Navbar} /> */}
      {/* <Route path="/About" exact component={FirstNav} /> */}
      {/* <Route path="/Books/:id/:category/pdf" exact component={FirstNav} /> */}
      <Route path="/Subscription" exact component={Subcription} />
      <Route path="/Join" exact component={Join} />

      {/* <Route path="/items" component={Navbar} /> */}
      <Route path="/view" exact component={PdfViewer} />

      {/* <Route path="/Contact" exact component={FirstNav} /> */}
      <Route path="/items/:Category" exact component={FirstHoverItems} />

      <Route path="/" exact component={Hero} />
      <Route path="/Contact" exact component={Contact} />

      {/* <Route path="/" exact component={FrontendCover} /> */}
      <Route path="/" exact component={Footer} />
      {/* <Route path="/Books" exact component={FirstNav} /> */}
      {/* <Route path="/Books/:id/:category" exact component={Navbar} /> */}

      <Route path="/Books" exact component={Books} />
      <Route path="/Books" exact component={Footer} />
      <Route path="/Contact" exact component={Footer} />
      <Route path="/items" component={Footer} />
      <Route path="/About" exact component={DigitalLInfo} />
      {/* <Route path="/About" exact component={Footer} /> */}
      {/* <Route path="/Books/:id/:category/pdf" exact component={ItemDetails} /> */}

      <Route path="/Books/:id/:category/pdf" exact component={About} />
      <Route path="/Books/:id/:category" exact component={ItemDetails} />
      {/* <Route path="/Books/:id/:category" exact component={Footer} /> */}

      {/* <Route path="/about" exact component={About} /> */}

      {/* <Route path="/Admin" exact component={Signup} /> */}
      {/* <Route path="/Admin" exact component={Authentication} /> */}
      {/* <Route path="/login" exact component={Login} /> */}
      <ProtectedRoute path="/Dashboard" exact component={Dashboard} />
    </Router>
  );
}

export default App;
