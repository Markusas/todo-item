import React, { Component } from 'react';
import './App.css';
import { Header } from "../src/components/Header";
import { TodoItemContainer } from './components/TodoItem/TodoItemContainer';
import { todoItems } from "../src/data/todoItems";
import { TodoItemForm } from './components/TodoItemForm/TodoItemForm';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {
          todoItems.map((x,i) => 
            <div key={i}>
              <TodoItemContainer todoItem={x}/>
            </div>)
        }
      </div>
    );
  }
}

export default App;
