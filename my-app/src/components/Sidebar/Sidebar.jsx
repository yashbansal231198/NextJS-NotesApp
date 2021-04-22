import React from 'react';
import "./Sidebar.css";
import FlagIcon from '@material-ui/icons/Flag';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import profile from "../../assets/profile.png";
import covid from "../../assets/covid.png";
import friends from "../../assets/friends.png";
import groups from "../../assets/groups.png";
import marketplace from "../../assets/marketplace.png";
import videos from "../../assets/videos.png";
import events from "../../assets/events.png";
import memories from "../../assets/memories.png";
import saved from "../../assets/saved.png";
import shortcuts from "../../assets/shortcuts.jpg";
function Sidebar() {
    return (
        <div className="sidebar">
          <ul>
            <li>
              <a href="#">
                <img src={profile}/>
                <span>Yash Bansal</span>
              </a>
            </li>
            <li>
                <a href="#">
                    <FlagIcon/>
                  <span>Pages</span>
                </a>
              </li>
            <li>
              <a href="#">
                <img src={covid} />
                <span>COVID-19 Information Center</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img src={friends} />
                <span>Friends</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img src={groups} /> <span>Groups</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img src={marketplace} />
                <span>Marketplace</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img src={videos}/> <span>Watch</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img src={events} /> <span>Events</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img src={memories} />
                <span>Memories</span>
              </a>
            </li>
            <li>
                <a href="#">
                  <img src={saved} />
                  <span>Saved</span>
                </a>
              </li>
            <li>
            <a href="#">
              <ArrowDownwardIcon/>
              <span className="see_more">See More</span>
            </a>
            </li>
            <div className="border"></div>
            <h3 className="shortcut_title">Your shortcuts</h3>
            <div className="shortcuts_wrapper">
              <a href="#">
                <img src={shortcuts} />
                <span>Eltrova Company Private Ltd</span>
              </a>
            </div>
          </ul>
        </div>
    );
}

export default Sidebar;