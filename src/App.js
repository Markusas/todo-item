import React, { Component } from 'react';
import './App.css';
import { MainLayout } from './components/layouts/MainLayout';
import { StatisticsLayout } from "./components/layouts/StatisticsLayout";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={MainLayout}/>
          <Route path="/statistics" component={StatisticsLayout}/>
        </div>
      </Router>
    );
  }
}

export default App;
