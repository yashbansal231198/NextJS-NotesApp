import React from 'react';
import "./Feed.css";
import avatar1 from "../../assets/avatar1.png";
import avatar2 from "../../assets/avatar2.png";
import avatar3 from "../../assets/avatar3.png";
import avatar4 from "../../assets/avatar4.png";
import avatar5 from "../../assets/avatar5.png";
import profile from "../../assets/profile.png";
import user from "../../assets/user.png";
import sunflower from "../../assets/sunflower.jpg";
import emoji_like from "../../assets/emoji_like.png";
import emoji_surprised from "../../assets/emoji_surprised.png";
import emoji_angry from "../../assets/emoji_angry.png";
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import PublicIcon from '@material-ui/icons/Public';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import CommentIcon from '@material-ui/icons/Comment';
import ScreenShareIcon from '@material-ui/icons/ScreenShare';
import {
  Link
} from "react-router-dom";
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
                    <span>Feeling/Activity</span>
                  </div>
                </div>
            </div>
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
            
          <div className="news_feed">
            <div className="news_feed_title">
              <img src={user} />
              <div className="news_feed_title_content">
                <p>Pooja Dogra</p>
                <div className="time_info"> 
                <span>12h .</span>
                <PublicIcon/>
                </div>
              </div>
            </div>
            <div className="news_feed_description">
              <p className="news_feed_subtitle">
                Sun-flowers, stop growing!
If you touch the sky where those clouds are passing
like tufts of dandelion gone to seed,
the sky will put you out!
              </p>
              <img src={sunflower} />
        
            </div>

            <div className="likes_area">
              <div className="emojis">
                <img src={emoji_like} />
                <img src={emoji_surprised} />
                <img src={emoji_angry} />
                <span>25</span>
              </div>
              <div className="comment_counts">
                <span>4 Comments  </span>
                <span> 13 Shares</span>
              </div>
            </div>

            <div className="divider"><hr /></div>
            <div className="likes_buttons">
              <div className="likes_buttons_links">
                <ThumbUpIcon/>
                <span>Like</span>
              </div>
              <div className="likes_buttons_links">
                <CommentIcon/>
                <span>Comment</span>
              </div>
              <div className="likes_buttons_links">
                <ScreenShareIcon/>
                <span>Share</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Feed;