import React from 'react';
import Post from '../../components/Post/Post';
import  Share from '../../components/Share/Share';
import CreateRoom from '../../components/CreateRoom/CreateRoom';
import "./Feed.css";
import avatar1 from "../../assets/avatar1.png";
import avatar2 from "../../assets/avatar2.png";
import avatar3 from "../../assets/avatar3.png";
import avatar4 from "../../assets/avatar4.png";
import avatar5 from "../../assets/avatar5.png";
import {
  Link
} from "react-router-dom";
import { Room } from '@material-ui/icons';
function Feed() {
    return (
        <div className="feed">
            <div className="stories">
              
              
              <Link to="/stories/story1" className="story1" >
                <img src="https://picsum.photos/id/137/110/200" alt="" />
                <img id="inside" src={avatar3} />
                <span id="inside2">Rishabh</span>
                </Link>
                
              <Link to="/stories/story2" className="story1">
              <img src="https://picsum.photos/id/247/110/200" alt="" />
              <img id="inside" src={avatar2} />
              <span id="inside2"> Anurag </span>
              </Link>
              <Link to="/stories/story3" className="story1"> 
                <img src="https://picsum.photos/id/522/110/200" alt="" />
                <img id="inside" src={avatar5} />
                <span id="inside2">Pooja</span>
                </Link>
                <Link to="/stories/story4" className="story1">
                  <img src="https://picsum.photos/id/231/110/200" alt="" />
                  <img id="inside" src={avatar4} />
                  <span id="inside2">Nikita</span>
                  </Link>
                  <Link to="/stories/story5" className="story1">
                    <img src="https://picsum.photos/id/537/110/200" alt="" />
                    <img id="inside" src={avatar1}/>
                    <span id="inside2">Rahul</span>
                  </Link>
             
              
            </div>
            <div className="media_container">
             <Share/>
             <CreateRoom/>
             <Post/>
        </div>
      </div>
    );
}

export default Feed;