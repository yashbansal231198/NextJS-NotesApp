import React from 'react';
import "./StoryPageLeft.css";
import multiply from "../../assets/multiply.png";
import avatar1 from "../../assets/avatar1.png";
import avatar2 from "../../assets/avatar2.png";
import avatar3 from "../../assets/avatar3.png";
import avatar4 from "../../assets/avatar4.png";
import user from "../../assets/user.png";
import plus from "../../assets/plus.png";
import facebook from "../../assets/facebook.png";
import StoryAvailable from '../StoryAvailable/StoryAvailable';
function StoryPageLeft() {
    return (
    <div className="page_left">
  
     <div className="page_left_top">
     <img className="multiply" src={multiply} />
     <img src={facebook} />
    </div>
    <div className="story_divider"></div>
    <div className="page_left_middle">
    <h2>Stories</h2>
    <div>
    <span className="archive">Archive</span>
    <span className="settings">Settings</span>
    </div>
    </div>
    <h3>Your Story </h3>
    <div className="page_left_bottom">
    <img className="plus" src={plus} />
    <div>
    <p>  Create a Story </p>
    <span> Share a photo or write something</span>
    </div>
    </div>
    <h3 className="allstories">All Stories</h3>
    <div className="otherstories">
    <StoryAvailable index="0" profileImage={avatar3} name="Anurag Sharma" time="18h"/>
    <StoryAvailable index="1" profileImage={avatar2} name="Rishabh Singh" time="12h"/>
    <StoryAvailable index="2" profileImage={user} name="Pooja Jain" time="6h"/>
    <StoryAvailable index="3" profileImage={avatar1} name="Jay Shah" time="7h"/>
    <StoryAvailable index="4" profileImage={avatar4} name="Nikita Garg" time="20h"/>
    </div>
    </div>
    );
};

export default StoryPageLeft;