import './App.css';
import React, {useState} from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = () => {
  const pageSize = 6;
  const apiKey = "11b8b9a65c5647a7b4f0ce833179e79f";
  const [progress, setProgress] = useState(0);
  // const [apiKey, setApiKey] = useState(process.env.REACT_APP_NEWS_API);
  // Adding custom environment variables in react app like here i'm using for apikey

    return (
      <div>
        <Router>
        <NavBar/>
        {/* Adding react-top-loading-bar */}
        <LoadingBar
            height={3}
            color='#f11946'
            progress={progress}
        />
        <Routes>
          {/* here "key" is given as uniquely identifier for Re-mounting component so that without refresh your component becomes visible */}
          <Route exact path="/" element = {<News setProgress = {setProgress} apiKey = {apiKey} key="general" pageSize={pageSize} country="in" category="general"/>} />
          <Route exact path="/business" element = {<News setProgress = {setProgress} apiKey = {apiKey} key="business" pageSize={pageSize} country="in" category="business"/>} />
          <Route exact path="/entertainment" element = {<News setProgress = {setProgress} apiKey = {apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment"/>} />
          <Route exact path="/general" element = {<News setProgress = {setProgress} apiKey = {apiKey} key="general" pageSize={pageSize} country="in" category="general"/>} />
          <Route exact path="/health" element = {<News setProgress = {setProgress} apiKey = {apiKey} key="health" pageSize={pageSize} country="in" category="health"/>} />
          <Route exact path="/science" element = {<News setProgress = {setProgress} apiKey = {apiKey} key="science" pageSize={pageSize} country="in" category="science"/>} />
          <Route exact path="/sports" element = {<News setProgress = {setProgress} apiKey = {apiKey} key="sports" pageSize={pageSize} country="in" category="sports"/>} />
          <Route exact path="/technology" element = {<News setProgress = {setProgress} apiKey = {apiKey} key="technology" pageSize={pageSize} country="in" category="technology"/>} />
        </Routes>
        </Router>
      </div>
    );
}
export default App;


