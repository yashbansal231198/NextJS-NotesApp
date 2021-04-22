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
    <div id="feed0" className="storyfeed">
              <img src={avatar3} />
              <div>
                <p>Anurag Sharma</p>
                <span>18h</span>
              </div>
    </div>
    
    <div id="feed1" className="storyfeed">
              <img src={avatar2}/>
              <div>
                <p>Rishabh Singh</p>
                <span>12h</span>
              </div>
   </div>
  <div  id="feed2" className="storyfeed">
            <img src={user} />
            <div>
              <p>Pooja Jain</p>
              <span>6h</span>
            </div>
 </div>
         <div id="feed3" className="storyfeed">
  <img src={avatar1} />
  <div>
    <p>Jay Shah</p>
    <span>7h</span>
  </div>
</div>
<div id="feed4" className="storyfeed">
<img src={avatar4} />
<div>
  <p>Nikita Garg</p>
  <span>20h</span>
</div>
</div>
    </div>
    </div>
    );
};

export default StoryPageLeft;