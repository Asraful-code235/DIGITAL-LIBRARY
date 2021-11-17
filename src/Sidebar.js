import React, { useState } from "react";

import { Link } from "react-router-dom";

function Sidebar({ sidebarOpen, closeSidebar }) {
  const [menuActive, setMenuActive] = useState(false);
  const handelColor = () => setMenuActive(true);

  return (
    <div className={sidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
      <div className="sidebar_title">
        <div className="sidebar_img">
          {/* <img src={mobile} alt="" /> */}
          <h1>Admin Panel</h1>
        </div>
        <i
          className="fa fa-times"
          id="sidebarIcon"
          onClick={() => closeSidebar()}
        >
          {" "}
        </i>
      </div>

      <div className="sidebar_menu">
        <Link to={"/Dashboard"}>
          <div className="sidebar_link active_menu_link">
            <i className="fa fa-home"></i>
            <p>Dashboard</p>
          </div>
        </Link>
        <Link to="/Dashboard/AdminManagement">
          <div className="sidebar_link">
            <i className="fa fa-user-secret"></i>
            <p>Admin Management</p>
          </div>
        </Link>
        <Link to={"/Dashboard/LibraryManagement"}>
          <div className="sidebar_link">
            <i className="fa fa-building-o"></i>
            <p>Library Management</p>
          </div>
        </Link>
        <Link to={"/Dashboard/BookManagement"}>
          <div
            className={`sidebar_link ${menuActive ? "active_menu_link" : " "}`}
            onClick={() => handelColor}
          >
            <i className="fa fa-book"></i>
            <p>Book Management</p>
          </div>
        </Link>
        {/* <div className="sidebar_link">
          <i className="fa fa-question"></i>
          <p>Requests</p>
        </div> */}
      </div>
    </div>
  );
}

export default Sidebar;
