// @flow
import React, { Component } from 'react';
import './App.css';
import { MainLayout } from './components/layouts/MainLayout';
import { StatisticsLayout } from "./components/layouts/StatisticsLayout";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { RestTodoItemService } from './api/RestTodoItemService';

const SERVICE = new RestTodoItemService();

class App extends Component<{}> {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={() => <MainLayout todoItemService={SERVICE} />}/>
          <Route path="/statistics" component={() => <StatisticsLayout todoItemService={SERVICE} />}/>
        </div>
      </Router>
    );
  }
}

export default App;
