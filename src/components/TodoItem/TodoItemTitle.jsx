// @flow
import * as React from "react";

type TodoItemTitleProps = {
    title: string
}

export class TodoItemTitle extends React.Component<TodoItemTitleProps> {
    render(){
        return(
            <span>{this.props.title}</span>
        );
    }
}