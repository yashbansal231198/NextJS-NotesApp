import React from 'react';
import profile from "../../assets/profile.png";
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
function Share() {
    return (
        <div className="share">
                <div className="share_upSide">
                  <img src={profile}/>
                  <input type="text" placeholder="What's on your mind, Yash?" />
                </div>
                <hr />
                <div className="share_downSide">
                  <div className="share_downSide_link">
                    <VideocamIcon className="live-video-icon"/>
                    <span>Live Video</span>
                  </div>
                  <div className="share_downSide_link">
                    <PhotoLibraryIcon className="photo-video-icon"/>
                    <span>Photo/Video</span>
                  </div>
                  <div className="share_downSide_link">
                    <InsertEmoticonIcon className="feeling-icon "/>
                    <span>Feeling/media_container</span>
                  </div>
                </div>
            </div>
    );
}

export default Share;