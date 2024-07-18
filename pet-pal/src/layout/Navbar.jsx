import { Link } from "react-router-dom";
import "./NavBar.module.css";
import { Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav
        style={{
          width: "200px",
          float: "left",
          backgroundColor: "rgba(173, 216, 230, 255)",
          height: "100vh",
        }}
      >
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/profile/123">My Profile</Link>
          </li>
          <li>
            <Link to="/view-pet">View Pets</Link>
          </li>
          <li>
            <Link to="/chat">Chat</Link>
          </li>
          <li>
            <Link to="/view-pet/123">PetProfile Temp</Link>
          </li>
        </ul>
      </nav>
      <div style={{ marginLeft: "200px" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default Navbar;