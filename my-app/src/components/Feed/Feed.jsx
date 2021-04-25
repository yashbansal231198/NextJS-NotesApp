import React from 'react';
import Post from '../../components/Post/Post';
import  Share from '../../components/Share/Share';
import  StoryButton from '../../components/StoryButton/StoryButton';
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
              <StoryButton index="1" curImage="https://picsum.photos/id/137/110/200" profilePhoto={avatar3} name="Rishabh"/>
              <StoryButton index="2" curImage="https://picsum.photos/id/247/110/200" profilePhoto={avatar2} name="Anurag"/>
              <StoryButton index="3" curImage="https://picsum.photos/id/522/110/200" profilePhoto={avatar5} name="Pooja"/>
              <StoryButton index="4" curImage="https://picsum.photos/id/231/110/200" profilePhoto={avatar4} name="Nikita"/>
              <StoryButton index="5" curImage="https://picsum.photos/id/537/110/200" profilePhoto={avatar1} name="Rahul"/>
              
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