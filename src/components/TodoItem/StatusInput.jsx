// @flow
import * as React from "react";
import * as todoItem from "../../data/todoItem";

type StatusInputProps = {
    status: TodoItemStatus,
    onChange?: (newStatus: TodoItemStatus) => mixed
}

export class StatusInput extends React.Component<StatusInputProps> {
    handleStatusChange(statusStr: string) {
        if (this.props.onChange === undefined) {
            return;
        }
        const status = ((statusStr: any): TodoItemStatus);
        this.props.onChange(status);
    }
    render(){
        return(
            <select name="status" defaultValue={this.props.status} onChange={e => this.handleStatusChange(e.target.value)}>
                {
                    todoItem.Status.map((x,i) =>
                    <option key={i} value={x}>{x}</option>)
                }
            </select>
        );
    }
}