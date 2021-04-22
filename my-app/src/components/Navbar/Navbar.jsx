import React from "react";
import "./Navbar.css";
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import StorefrontIcon from '@material-ui/icons/Storefront';
import PeopleIcon from '@material-ui/icons/People';
import BusinessIcon from '@material-ui/icons/Business';
import AddIcon from '@material-ui/icons/Add';
import MessageIcon from '@material-ui/icons/Message';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import facebookLogo from "../../assets/facebook.png";
import profile from "../../assets/profile.png";
function Navbar() {
    return (
    <div className="navbar">
    <div className="navbar_left">
      <img className="navbar_logo" src={facebookLogo} />
      <div className="input-icons">
        <SearchIcon/>
        <input
          className="input-field"
          type="text"
          placeholder="Search Facebook"
        />
      </div>
    </div>

    <div className="navbar_center">
      <a className="active_icon" href="#">
        <HomeIcon/>
      </a>
      <a href="#">
      <PlayCircleFilledIcon/>
        </a>
        <a href="#">
        <StorefrontIcon/>
        </a>
      <a href="#">
      <PeopleIcon/>
      </a>
      
      <a href="#">
        <BusinessIcon/> 
      </a>
    </div>

    <div className="navbar_right">
      <div className="navbar_right_profile">
        <img src={profile} />
        <span>Yash</span>
      </div>
      <div className="navbar_right_links">
        <AddIcon/>
        <MessageIcon/>
        <NotificationsIcon/>
        <ArrowDownwardIcon/>
      </div>
    </div>
  </div>
    )
}

export default Navbar;