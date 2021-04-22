import React from 'react';
import "./Widgets.css";
import user from "../../assets/user.png";
import giftbox from "../../assets/gift-box.png";
import avatar1 from "../../assets/avatar1.png";
import avatar2 from "../../assets/avatar2.png";
import avatar3 from "../../assets/avatar3.png";
import avatar4 from "../../assets/avatar4.png";
import avatar5 from "../../assets/avatar5.png";
import SearchIcon from '@material-ui/icons/Search';
import SmsIcon from '@material-ui/icons/Sms';
function Widgets() {
    return (
        <div class="widgets">
        <div class="widgets_inner">
          <div class="sponsored">
            <h3> Sponsored</h3>
          </div>
          <div class="widgets_divider"></div>
          <div class="friend_requests">
            <div class="friend_requests_top">
                <h3>Friend Requests</h3>
                <h3 class="seeAll">See All</h3>
            </div>
            <div class="friend_requests_bottom">
                <img src={user} />
                <div class="friend_requests_bottom_content">
                  <p>Saurabh Kp</p>
                  <span>2 mutual friends </span>
                
                  <div class="friend_requests_buttons">
                      <button>Confirm</button>
                      <button class="delete"> Delete</button>
                  </div>
            </div>
          </div>
        </div>
          <div class="widgets_divider"></div>
          <div class="birthdays">
            <h3>Birthdays</h3>
          </div>
          <ul>
            <li>
              <a href="#">
                <img src={giftbox} />
                <span>Anurag's birthday is today</span>
              </a>
            </li>
          </ul>
          <div class="widgets_divider"></div>
          <div class="contacts">
            <h3>Contacts</h3>
            <div class="contact_icons">
              <SearchIcon/>
              <SmsIcon/>
            </div>
          </div>
          <ul>
            <li>
              <a href="#">
                <img src={avatar1} />
                <span>Somil Sharma</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img src={avatar2}/>
                <span>Ankush Mahindru</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img src={avatar5} />
                <span>Rishabh Gupta</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img src={avatar3} />
                <span>Raunaq Singh</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img src={avatar4}/>
                <span>Arushi garg</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
}

export default Widgets;