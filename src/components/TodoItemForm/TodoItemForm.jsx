import * as React from "react";
import * as todoItem from "../../data/todoItem";
import { TodoItemStatus } from "../TodoItem/TodoItemStatus";

export class TodoItemForm extends React.Component{
    render(){
        return(
            <form>
                Title: <input type="text" name="title" value={this.props.todoItem.title}/>
                <br/>
                Description: <input type="text" name="description" value={this.props.todoItem.description}/>
                <br/>
                Status: <TodoItemStatus status={this.props.todoItem.status}/>
                <br/>
                Priority: <select defaultValue={this.props.priority}>
                {
                    todoItem.Priority.map((x,i) =>
                    <option key={i} value={x}>{x}</option>)
                }
                </select>
                <br/>
                <button>Save</button>
            </form>
        );
    }
}