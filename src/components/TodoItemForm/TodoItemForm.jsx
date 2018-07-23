// @flow
import * as React from "react";
import * as todoItem from "../../data/todoItem";
import { StatusInput } from "../TodoItem/StatusInput";

type TodoItemFormProps = {
    onUpdate: (item: TodoItem) => void,
    todoItem?: TodoItemRef
};

export class TodoItemForm extends React.Component<TodoItemFormProps>{
    handleSubmit(e: any) {
        e.preventDefault();
        const newData = {
            id: this.props.todoItem !== undefined ? this.props.todoItem.id : 0, // TODO: fix this
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
                Status: <StatusInput status={this.props.todoItem.status}/>
                <br/>
                Priority: <select name="priority" defaultValue={this.props.todoItem.priority}>
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