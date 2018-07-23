// @flow
import * as React from "react";

type EditTodoItemProps = {
    onEdit: () => void
};

export class EditTodoItem extends React.Component<EditTodoItemProps> {
    render(){
        return(
            <button onClick={this.props.onEdit}>Edit</button>
        );
    }
}