import React, { useState } from "react";
import "./css/main.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";

function Signup() {
  const [isAuth] = useState(true);
  return (
    <>
      <Router>
        <Switch>
          <Route path={"/Admin"} exact component={Login} />
          {/* <Route path={"/registration"} exact component={Registration} /> */}

          <Route
            path="/Dashboard"
            exact
            component={Dashboard}
            isAuth={isAuth}
          />
        </Switch>
      </Router>
    </>
  );
}

export default Signup;
