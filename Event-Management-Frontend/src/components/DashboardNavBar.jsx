import Group from "./../assets/images/Group 1.png"; // Replace with the correct path
import c5 from "./../assets/images/c5.jpg"; // Replace with the correct path
import "./../styles/Dashboard.css";
import logout from "./../assets/images/logout.png";
import down from "./../assets/images/down.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../redux";
import Avatar from "@mui/material/Avatar";
import { deepOrange } from "@mui/material/colors";

const DashboardNavBar = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const handleDropdownClick = (e) => {
    e.currentTarget.querySelector(".dropdown-menu").classList.toggle("d-none");
  };

  return (
    <div className="nav-side-box">
      <nav>
        <Link to={"/dashboard"} className="">
          <img className="logo pt-3" src={Group} alt="logo" />
        </Link>

        <Link to={"/hostEvent"} className="">
          <button className="button1"></button>
        </Link>
        <Link to={"/browseEvents"} className="">
          <button className="button2"></button>
        </Link>
        {/* <Avatar alt="Profile Image" sx={{ bgcolor: deepOrange[500] }}>
          {auth.userData ? auth.userData.name[0] : "U"}
        </Avatar> */}
        <div className="profile-dropdown" onClick={handleDropdownClick}>
          <img
            className="profile-picture rounded-circle"
            src={c5}
            alt="profile"
          />
          <div className="profile-name-email">
            <span className="profile-name text-white">
              {auth.userData.name}
            </span>
            <span className="profile-email text-white">
              {auth.userData.email}
            </span>
            <span className="profile-img">
              <img src={down}></img>
            </span>
          </div>
          <div className="dropdown-menu">
            <Link to={"/profile"}>
              <p className="dropdown-item">Profile</p>
            </Link>
            <Link to={"/myEvents"}>
              <p className="dropdown-item">My Eventz</p>
            </Link>
            <Link to={"/myBookings"}>
              <p className="dropdown-item">My Bookings</p>
            </Link>
            <Link to={"/"}>
              <img
                id="img-lg"
                src={logout}
                alt="logout"
                onClick={() => {
                  dispatch(authActions.logout());
                }}
              />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default DashboardNavBar;
