import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import{
  BrowserRouter as Router,
  Routes, //Switch,
  Route,
  //Link
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
  pgSize = 6;
  apiKey = process.env.REACT_APP_NEWS_API

  state = {
    progress: 0
  }

  setProgress = (progress) => {
    this.setState({progress: progress})
  }

  render() {
    return (
      <div>
        <Router>
          <Navbar/>
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
            // onLoaderFinished={() => setProgress(0)}
          />
          {/* <News setProgress={this.setProgress} apiKey={this.apiKey}pageSize={6} category="sports" country="in"/> */}
          <Routes>
            <Route exact path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey}key="general" pageSize={this.pgSize} category="general" country="in"/>}/>
            <Route exact path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey}key="business" pageSize={this.pgSize} category="business" country="in"/>}/>
            <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey}key="entertainment" pageSize={this.pgSize} category="entertainment" country="in"/>}/>
            <Route exact path="/general" element={<News setProgress={this.setProgress} apiKey={this.apiKey}key="general" pageSize={this.pgSize} category="general" country="in"/>}/>
            <Route exact path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey}key="health" pageSize={this.pgSize} category="health" country="in"/>}/>
            <Route exact path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey}key="science" pageSize={this.pgSize} category="science" country="in"/>}/>
            <Route exact path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey}key="sports" pageSize={this.pgSize} category="sports" country="in"/>}/>
            <Route exact path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey}key="technology" pageSize={this.pgSize} category="technology" country="in"/>}/>
          </Routes>
        </Router>
      </div>
    )
  }
}
