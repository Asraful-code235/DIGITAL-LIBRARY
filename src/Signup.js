import React from "react";
import "./css/main.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Registration from "./Registration";
import Login from "./Login";

function Signup() {
  return (
    <>
      <Router>
        <Switch>
          <Route path={"/admin"} exact component={Login} />
          <Route path={"/registration"} exact component={Registration} />
          <Route path={"/Dashboard"} exact component={Dashboard} />
        </Switch>
      </Router>
    </>
  );
}

export default Signup;
