// @flow
import * as React from "react";
import * as todoItem from "../../data/todoItem";

type StatusInputProps = {
    status: TodoItemStatus
}

export class StatusInput extends React.Component<StatusInputProps> {
    render(){
        return(
            <select name="status" defaultValue={this.props.status}>
                {
                    todoItem.Status.map((x,i) =>
                    <option key={i} value={x}>{x}</option>)
                }
            </select>
        );
    }
}