import React from "react";
import LatestCategory from "./LatestCategory";
import { BrowserRouter as Routers, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import Main from "./Main";
import NavbarDashboard from "./NavbarDashboard";
import { Link } from "react-router-dom";

import Admin from "./Admin";

function Dashboard() {
  return (
    <div>
      <div className="main-container">
        <Routers>
          <Route path="/Dashboard" component={NavbarDashboard} />
          {/* <NavbarDashboard  /> */}
          {/* <NavbarDashboard
            sidebarOpen={sidebarOpen}
            openSidebar={openSidebar}
          /> */}

          {/* <Main /> */}

          <Route path="/Dashboard" exact component={Main} />
          <Route
            path="/Dashboard/BookManagement"
            exact
            component={LatestCategory}
          />
          <Route path="/Dashboard/LibraryManagement" exact component={Admin} />
          <Route path="/Dashboard" component={Sidebar} />

          {/* <Sidebar closeSidebar={Sidebar} /> */}
        </Routers>

        {/* <Sidebar /> */}
        <Link to={"/admin"}>
          <div className="navbar_left_leave">
            <i className="fa fa-sign-out"></i>
            <h1>Leave</h1>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;
