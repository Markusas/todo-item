import * as React from "react";
import "../../styles/todoItem.css";
import { TodoItemPriority } from "./TodoItemPriority";
import { TodoItemTitle } from "./TodoItemTitle";
import { TodoItemStatus } from "./TodoItemStatus";
import { EditTodoItem } from "./EditTodoItem";
import { RemoveTodoItem } from "./RemoveTodoItem";

export class TodoItemContainer extends React.Component {
    render() {
        return(
            <div className="todo-item-container">
                <TodoItemPriority priority="LOW"/>
                <TodoItemTitle title="Amazing task"/>
                <TodoItemStatus status="OPEN"/>
                <EditTodoItem/>
                <RemoveTodoItem/>
            </div>
        );
    }
}