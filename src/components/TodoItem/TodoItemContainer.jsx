import * as React from "react";
import "../../styles/todoItem.css";
import { TodoItemPriority } from "./TodoItemPriority";
import { TodoItemTitle } from "./TodoItemTitle";
import { TodoItemStatus } from "./TodoItemStatus";
import { EditTodoItem } from "./EditTodoItem";
import { RemoveTodoItem } from "./RemoveTodoItem";
import { TodoItemForm } from "../TodoItemForm/TodoItemForm";

export class TodoItemContainer extends React.Component {
    state = {
        isOpen: false
    };
    render() {
        return(
            <div>
                <div className="todo-item-container">
                    <TodoItemPriority priority={this.props.todoItem.priority}/>
                    <TodoItemTitle title={this.props.todoItem.title}/>
                    <TodoItemStatus status={this.props.todoItem.status}/>
                    <EditTodoItem onEdit={() => this.setState({isOpen: !this.state.isOpen})}/>
                    <RemoveTodoItem onRemove={() => console.log("Deleting task with id: ", this.props.todoItem.id)}/>
                </div>
                {
                    this.state.isOpen
                    ? <div>
                        <TodoItemForm onUpdate={newData => console.log("Updated: ", newData)} todoItem={this.props.todoItem}/>
                    </div>
                    : ""
                }
            </div>
        );
    }
}