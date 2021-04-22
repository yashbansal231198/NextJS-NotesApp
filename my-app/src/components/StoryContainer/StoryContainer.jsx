import React, { useState , useEffect, useRef, useReducer} from 'react';
import "./StoryContainer.css";
import food from "../../assets/food.jpeg";
import pic2 from "../../assets/pic2.jpeg";
import pic3 from "../../assets/pic3.jpeg";
import pic4 from "../../assets/pic4.jpeg";
import pic5 from "../../assets/pic5.jpeg";
import pic6 from "../../assets/pic6.jpeg";
import pic7 from "../../assets/pic7.jpeg";
import pic8 from "../../assets/pic8.jpeg";
import pic9 from "../../assets/pic9.jpeg";
import pic10 from "../../assets/pic10.jpeg";
import pic11 from "../../assets/pic11.jpeg";
import pic12 from "../../assets/pic12.jpeg";
import pic13 from "../../assets/pic13.jpeg";
import pic14 from "../../assets/pic14.jpeg";
import pic15 from "../../assets/pic15.jpeg";
import backward from "../../assets/backward.png";
import forward from "../../assets/forward.png";
import avatar3 from "../../assets/avatar3.png";
import pause from "../../assets/pause.png";
import play from "../../assets/play.png";
import boxcross from "../../assets/boxcross.png";
import exclamation from "../../assets/exclamation.png";
import bug from "../../assets/bug.png";
import whiteplus from "../../assets/whiteplus.png";
import facebookmessenger from "../../assets/facebook-messenger.png";
import notification from "../../assets/notification.png";
import maleuser from "../../assets/male-user.png";
import emoji_like from "../../assets/emoji_like.png";
import emoji_surprised from "../../assets/emoji_surprised.png";
import smiling_face from "../../assets/smiling-face.png";
import emoji_angry from "../../assets/emoji_angry.png";
import winking from "../../assets/winking.png";
import neutral_face from "../../assets/neutral-face.png";
import zany_face from "../../assets/zany-face.png";
import DragIndicatorIcon from '@material-ui/icons/DragIndicator';
import { RestaurantRounded } from '@material-ui/icons';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
function Create2DArray(rows) {
  let arr = [];
  for (var i=0;i<rows;i++) {
     arr[i] = [];
  }
  return arr;
}
let stories = Create2DArray(5);
stories[0][0] = new Image();
stories[0][0].src = food;

stories[0][1] = new Image();
stories[0][1].src = pic2 ;

stories[0][2] = new Image();
stories[0][2].src = pic13 ;

stories[0][3] = new Image();
stories[0][3].src = pic4 ;

stories[1][0] = new Image();
stories[1][0].src = pic5 ;

stories[1][1] = new Image();
stories[1][1].src = pic6;

stories[1][2] = new Image();
stories[1][2].src = pic7;


stories[2][0] = new Image();
stories[2][0].src = pic8;

stories[2][1] = new Image();
stories[2][1].src = pic9 ;

stories[2][2] = new Image();
stories[2][2].src = pic10 ;

stories[2][3] = new Image();
stories[2][3].src = pic11;

stories[3][0] = new Image();
stories[3][0].src = pic12;

stories[3][1] = new Image();
stories[3][1].src = pic3 ;

stories[4][0] = new Image();
stories[4][0].src = pic14 ;
let names =["Anurag Sharma","Rishabh Singh", "Pooja Jain","Jay Shah","Nikita Garg"];
let hrs=["18h","12h","6h","7h","15h"];
let currentPercent= 0;
let boxCause=false;
function reducer(state, { type, payload }) {

  if (type === "SET_A")
    return { ...state, storyPaused: payload , boxPresent: payload};
  else if (type === "SET_B") return { ...state, storyPaused: payload };
  return state;
}
function StoryContainer() {
    let [curIndex, setcurIndex] = useState(0);
    let [storyIndex, setstoryIndex] = useState(0);
    let [state, dispatch] = useReducer(reducer, { storyPaused: false, boxPresent: false });
    let [mute, setmute] = useState(false);
    let funcRef=useRef();
    let showPercentRef= useRef();
    let remainRef=useRef();
    let func;
    let showPercent;
function getProgressBarClassName(index) {
  
        if (index < curIndex) {
          return "progress-bar-finished";
        } else if (index === curIndex) {
          return state.storyPaused ? " progress-bar-active progress-bar-paused" : "progress-bar-active";
        } else {
          return "progress-bar";
        }
      }
  function proceed() {
        if (currentPercent < 100) {
          currentPercent += 1;
        } else {
          currentPercent = 0;
        }
      }
function previous()
{ 
  currentPercent=0;
 
    if(state.boxPresent)
    dispatch({ type: "SET_A", payload: false});
    else if(state.storyPaused)
    dispatch({ type: "SET_B", payload: false});
  if(curIndex>0)
  setcurIndex(curIndex-1);
  else {
    if(storyIndex> 0)
   { setstoryIndex(storyIndex-1);
     setcurIndex(0);
   }
  }

}

function next()
{ 
  
  currentPercent=0;
  if(state.boxPresent)
  dispatch({ type: "SET_A", payload: false});
  else if(state.storyPaused)
  dispatch({ type: "SET_B", payload: false});
  if(curIndex < stories[storyIndex].length-1)
  { 
    setcurIndex(curIndex+1);
    
  }
  else {
    if(storyIndex< stories.length-1)
   { 
     setcurIndex(0);
     setstoryIndex(storyIndex+1);
   }
  }
  clearTimeout(remainRef.current);
}
 
function stop()
{ 
 
  if(state.storyPaused && state.boxPresent)
  {
    dispatch({ type: "SET_A", payload: false});
  }
  else
  {
    if(state.storyPaused)
    {
      dispatch({ type: "SET_B", payload: false});
    }
    else
    {
      dispatch({ type: "SET_B", payload: true});
    }
  }
  
}
function boxchange()
{ 
   
  if(!state.boxPresent)
  dispatch({ type: "SET_A", payload: true});
  else
  {
    dispatch({ type: "SET_A", payload: false});
  }

}
function changeVolume()
{
  setmute(!mute);
  console.log("YASH");
}
useEffect(() => {
  if(state.storyPaused==true)
{
clearInterval(funcRef.current);
clearInterval(showPercentRef.current);
clearTimeout(remainRef.current);
}
else
{   
    let t=(100-currentPercent)*50;
    console.log(currentPercent);
  remainRef.current=setTimeout(next,t);
  showPercentRef.current = setInterval(proceed, 50);
  
}
return ()=> clearInterval(showPercentRef.current);
} , [state.storyPaused] );

  useEffect(() => {
     funcRef.current = setInterval(next, 5000);
    return () => clearInterval(funcRef.current);
  }, [curIndex, storyIndex]);
  
  

    return (
        <div className="story-container">
        <div className="story-upper">
        <img onClick={previous} className="backward" src={backward}/>
        <div id="story" className="story">
         
          <div id="prog" className="progress-bars">
              {stories[storyIndex].map((story, index) => (
                 <div  className="progress">
                <div className={getProgressBarClassName(index)} >
    
                </div>
                </div> 
              ))}
         </div>
         <div className="title">
         <div className="story_left">
            <img src={avatar3} />
              <span>{names[storyIndex]}</span>
              <span>{hrs[storyIndex]}</span>
            </div>
            <div className="story_icons">
            {!state.storyPaused && <img onClick={stop}  className="paused" src={pause}/>}
            {state.storyPaused && <img onClick={stop}  className="paused" src={play}/>}
            {!mute && <VolumeUpIcon onClick={changeVolume} className="mute"/>}
            {mute && <VolumeOffIcon onClick={changeVolume} className="mute"/>}
            <DragIndicatorIcon onClick={boxchange} id="box" />
            </div>
            
          </div>
          {state.boxPresent && 
          <div className="box_arrow-top">
          <div className="box_inside">
          <img className="bug" src={boxcross}/>
           Mute
          </div>
          <div className="box_inside">
          <img className="bug" src={exclamation}/>
          Give Feedback or Report Story</div>
          <div className="box_inside"> <img className="bug" src={bug}/>
          Something isn't working</div>
        </div>}
              <img id="bannerImage" src={stories[storyIndex][curIndex].src}/>
          </div>
        <img  onClick={next} className="forward"   src={forward}/>
        <img className="top_right_icons" src={whiteplus}/>
        <img className="top_right_icons" src={facebookmessenger}/>
        <img className="top_right_icons" src={notification}/>
        <img className="top_right_icons" src={maleuser}/>
        </div>
        <div className="comments">
           <div className="commentsinput"> 
           <div className="reply">Reply... </div>
           </div>
              <img src={emoji_like}/>
              <img src={emoji_surprised}/>
              <img src={smiling_face}/>
              <img src={emoji_angry}/>
              
              <img src={winking}/>
              <img src={neutral_face}/>
              <img src={zany_face}/>
             
      </div>
     
      </div>
    );
};

export default StoryContainer;