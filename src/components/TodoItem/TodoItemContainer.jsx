import * as React from "react";
import "../../styles/todoItem.css";
import { TodoItemPriority } from "./TodoItemPriority";
import { TodoItemTitle } from "./TodoItemTitle";
import { TodoItemStatus } from "./TodoItemStatus";
import { EditTodoItem } from "./EditTodoItem";
import { RemoveTodoItem } from "./RemoveTodoItem";
import { TodoItemForm } from "../TodoItemForm/TodoItemForm";

export class TodoItemContainer extends React.Component {
    render() {
        return(
            <div>
                <div className="todo-item-container">
                    <TodoItemPriority priority={this.props.todoItem.priority}/>
                    <TodoItemTitle title={this.props.todoItem.title}/>
                    <TodoItemStatus status={this.props.todoItem.status}/>
                    <EditTodoItem/>
                    <RemoveTodoItem/>
                </div>
                <div>
                    <TodoItemForm todoItem={this.props.todoItem}/>
                </div>
            </div>
        );
    }
}