import React from 'react';
import avatar1 from "../../assets/avatar1.png";
import avatar2 from "../../assets/avatar2.png";
import avatar3 from "../../assets/avatar3.png";
import avatar4 from "../../assets/avatar4.png";
import avatar5 from "../../assets/avatar5.png";
import VideocamIcon from '@material-ui/icons/Videocam';
function CreateRoom() {
    return (
        <div className="create_room">
        <button className="create_room_button">
        <VideocamIcon className="live-video-icon"/>
         <span> Create Room</span>
        </button>
        <img src={avatar5} />
        <img src={avatar2} />
        <img src={avatar3} />
        <img src={avatar1} />
        <img src={avatar4} /> 
    </div>
    );
}

export default CreateRoom;