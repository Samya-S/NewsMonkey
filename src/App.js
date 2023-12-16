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

export default class App extends Component {
  pgSize = 12;
  render() {
    return (
      <div>
        <Router>
          <Navbar/>
          {/* <News pageSize={6} category="sports" country="in"/> */}
          <Routes>
            <Route exact path="/" element={<News key="general" pageSize={this.pgSize} category="general" country="in"/>}/>
            <Route exact path="/business" element={<News key="business" pageSize={this.pgSize} category="business" country="in"/>}/>
            <Route exact path="/entertainment" element={<News key="entertainment" pageSize={this.pgSize} category="entertainment" country="in"/>}/>
            <Route exact path="/general" element={<News key="general" pageSize={this.pgSize} category="general" country="in"/>}/>
            <Route exact path="/health" element={<News key="health" pageSize={this.pgSize} category="health" country="in"/>}/>
            <Route exact path="/science" element={<News key="science" pageSize={this.pgSize} category="science" country="in"/>}/>
            <Route exact path="/sports" element={<News key="sports" pageSize={this.pgSize} category="sports" country="in"/>}/>
            <Route exact path="/technology" element={<News key="technology" pageSize={this.pgSize} category="technology" country="in"/>}/>
          </Routes>
        </Router>
      </div>
    )
  }
}
