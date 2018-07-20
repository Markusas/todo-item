import * as React from "react";
import * as todoItem from "../../data/todoItem";
import { TodoItemStatus } from "../TodoItem/TodoItemStatus";

export class TodoItemForm extends React.Component{
    handleSubmit(e) {
        e.preventDefault();
        const newData = {
            id: this.props.todoItem.id,
            title: e.target.title.value,
            description: e.target.description.value,
            priority: e.target.priority.value,
            status: e.target.status.value
        };

        this.props.onUpdate(newData);
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit.bind(this)}>
                Title: <input type="text" name="title" defaultValue={this.props.todoItem.title}/>
                <br/>
                Description: <input type="text" name="description" defaultValue={this.props.todoItem.description}/>
                <br/>
                Status: <TodoItemStatus status={this.props.todoItem.status}/>
                <br/>
                Priority: <select name="priority" defaultValue={this.props.priority}>
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