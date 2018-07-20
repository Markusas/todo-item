import * as React from "react";
import * as todoItem from "../../data/todoItem";

export class TodoItemStatus extends React.Component {
    render(){
        return(
            <select defaultValue={this.props.status}>
                {
                    todoItem.Status.map((x,i) =>
                    <option key={i} value={x}>{x}</option>)
                }
            </select>
        );
    }
}