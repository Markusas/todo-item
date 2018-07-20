import * as React from "react";

export class TodoItemPriority extends React.Component {
    render(){
        return(
            <span>{this.props.priority}</span>
        );
    }
}