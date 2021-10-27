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
            <a href="#">Dashboard</a>
          </div>
        </Link>
        <div className="sidebar_link">
          <i className="fa fa-user-secret"></i>
          <a href="#">Admin Management</a>
        </div>
        <Link to={"/Dashboard/LibraryManagement"}>
          <div className="sidebar_link">
            <i className="fa fa-building-o"></i>
            <a href="#">Library Management</a>
          </div>
        </Link>
        <Link to={"/Dashboard/BookManagement"}>
          <div
            className={`sidebar_link ${menuActive ? "active_menu_link" : " "}`}
            onClick={() => handelColor}
          >
            <i className="fa fa-book"></i>
            <a href="#">Book Management</a>
          </div>
        </Link>
        <div className="sidebar_link">
          <i className="fa fa-handshake-o"></i>
          <a href="#">Contacts</a>
        </div>
        <div className="sidebar_link">
          <i className="fa fa-question"></i>
          <a href="#">Requests</a>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
