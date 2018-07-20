import * as React from "react";
import { TodoItemForm } from "../TodoItemForm/TodoItemForm";

export class NewTodoItem extends React.Component {
    state = {
        isOpen: false
    };
    render(){
        return(
            <div>
                <button onClick={() => this.setState({isOpen: !this.state.isOpen})}>Add new task</button>
                {
                    this.state.isOpen
                    ? <TodoItemForm
                    todoItem={this.props.todoItem}
                    onUpdate={newItem => 
                        console.log("Added new item: ", newItem)}/>
                    : ""
                } 
            </div>
        );
    }
}