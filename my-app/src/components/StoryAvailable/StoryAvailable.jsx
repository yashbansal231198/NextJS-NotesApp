import React from 'react';
import "./StoryAvailable.css";
function StoryAvailable({index,profileImage,name,time}) {
    return (
        <div id={`feed${index}`} className="storyfeed">
              <img src={profileImage} />
              <div>
                <p>{name}</p>
                <span>{time}</span>
              </div>
    </div>
    );
}

export default StoryAvailable;