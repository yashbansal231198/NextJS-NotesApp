import React from 'react';
import "./Post.css";
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
function Post()
{
    return (
        <div className="post">
        <div className="post_title">
          <img src={user} />
          <div className="post_title_content">
            <p>Pooja Dogra</p>
            <div className="time_info"> 
            <span>12h .</span>
            <PublicIcon/>
            </div>
          </div>
        </div>
        <div className="post_description">
          <p className="post_subtitle">
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
    );
}

export default Post;