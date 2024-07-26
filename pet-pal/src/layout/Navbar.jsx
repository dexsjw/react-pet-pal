import { Link, useLocation } from "react-router-dom";
import "./NavBar.module.css";
import { Outlet, Navigate } from "react-router-dom";
import { JWT_TOKEN } from "../service/PetPalService";
import pawicon from "../common/images/paw-icon.png";

const Navbar = () => {
  // Redirect to login if not logged in
  const location = useLocation();
  const isLoggedIn = localStorage.getItem(JWT_TOKEN) ? true : false;
  if (!isLoggedIn) {
    return <Navigate to="/" state={{ from: location }} />;
  }

  return (
    <div>
      <nav
        style={{
          width: "18vw",
          float: "left",
          backgroundColor: "rgba(173, 216, 230, 255)",
          height: "100vh",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            margin: "1rem 0 0 1rem",
            gap: "0.5rem",
          }}
        >
          <img
            src={pawicon}
            style={{
              width: "2rem",
              height: "2rem",
              borderRadius: "9999rem",
              padding: "0.5rem",
              backgroundColor: "rgba(150, 150, 150)",
            }}
          />
          <h1
            style={{
              fontSize: "1.5rem",
              color: "#6B6B6B",
            }}
          >
            PET PAL
          </h1>
        </div>

        <ul>
          {/* <li>
            <Link to="/">Home</Link>
          </li> */}
          <li>
            <Link to="/view-pet">View Pets</Link>
          </li>
          <li>
            <Link to="/profile/123">My Profile</Link>
          </li>
          <li>
            <Link to="/chat">Chat</Link>
          </li>
          <li>
            <Link to="/view-pet/123">PetProfile Temp</Link>
          </li>
        </ul>
      </nav>
      <div style={{ margin: "0 0 0 18vw", padding: "1rem 0 0 1rem" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default Navbar;
