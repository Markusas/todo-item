import * as React from "react";

export class TodoItemTitle extends React.Component {
    render(){
        return(
            <span>{this.props.title}</span>
        );
    }
}