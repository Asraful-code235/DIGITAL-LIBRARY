import women from "./images/women.PNG";

const NavbarDashboard = ({ sidebarOpen, openSidebar }) => {
  return (
    <nav className="navbar">
      <div className="nav_icon" onClick={() => openSidebar}>
        <i className="fa fa-bars"></i>
      </div>
      <div className="navbar_left">
        <a href="/Dashboard/BookManagement" aria-disabled={true}>
          Book Management
        </a>
        <a href="/Dashboard" aria-disabled={true} className="active_link">
          Admin
        </a>
      </div>
      <div className="navbar_right">
        <a href="/NOwhere">
          <i className="fa fa-search"></i>
        </a>
        <a href="/" className="fa fa-clock-o"></a>
        <a href="/Nowhere">
          <img width="30px" src={women} alt="" />
        </a>
      </div>
    </nav>
  );
};
export default NavbarDashboard;
