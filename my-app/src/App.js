import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Feed from './components/Feed/Feed';
import Widgets from './components/Widgets/Widgets';
import StoryPageLeft from './components/StoryPageLeft/StoryPageLeft';
import StoryContainer from './components/StoryContainer/StoryContainer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {
  return (
    
    <Router>
    <div className="app">
    <Switch>
    <Route exact path="/">
    <Navbar/>
    <div className="content">
     <Sidebar/>
     <Feed/>
     <Widgets/>
    </div>
    
    </Route>
    <Route path="/stories/:id">
    <div className="story_page">
     <StoryPageLeft/>
     <StoryContainer/>
    </div>
    </Route>
    </Switch>
    </div>
    </Router>
  );
}

export default App;
