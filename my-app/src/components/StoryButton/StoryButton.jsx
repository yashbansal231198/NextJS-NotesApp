import React from 'react';
import "./StoryButton.css"
import {
    Link
  } from "react-router-dom";
function StoryButton({index,curImage,profilePhoto, name}) {
    return (
        <Link to={`/stories/story${index}`} className={`story${index}`} >
                <img src={curImage} alt="" />
                <img id="inside" src={profilePhoto} />
                <span id="inside2">{name}</span>
        </Link>
    );
}

export default StoryButton;