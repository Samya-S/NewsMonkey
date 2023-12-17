import './App.css';

import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import{
  BrowserRouter as Router,
  Routes, //Switch,
  Route,
  //Link
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

const App = () => {
  const pgSize = 6;
  const apiKey = process.env.REACT_APP_NEWS_API

  const [progress, setProgress] = useState(0)

  return (
    <div>
      <Router>
        <Navbar/>
        <LoadingBar
          color='#f11946'
          progress={progress}
          // onLoaderFinished={() => setProgress(0)}
        />
        {/* <News setProgress={setProgress} apiKey={apiKey}pageSize={6} category="sports" country="in"/> */}
        <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey}key="general" pageSize={pgSize} category="general" country="in"/>}/>
          <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey}key="business" pageSize={pgSize} category="business" country="in"/>}/>
          <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey}key="entertainment" pageSize={pgSize} category="entertainment" country="in"/>}/>
          <Route exact path="/general" element={<News setProgress={setProgress} apiKey={apiKey}key="general" pageSize={pgSize} category="general" country="in"/>}/>
          <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey}key="health" pageSize={pgSize} category="health" country="in"/>}/>
          <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey}key="science" pageSize={pgSize} category="science" country="in"/>}/>
          <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey}key="sports" pageSize={pgSize} category="sports" country="in"/>}/>
          <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey}key="technology" pageSize={pgSize} category="technology" country="in"/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App;
