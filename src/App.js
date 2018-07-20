import React, { Component } from 'react';
import './App.css';
import { Header } from "../src/components/Header";
import { TodoItemContainer } from './components/TodoItem/TodoItemContainer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <TodoItemContainer />
      </div>
    );
  }
}

export default App;
