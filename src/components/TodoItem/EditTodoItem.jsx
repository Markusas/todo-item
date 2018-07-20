import * as React from "react";

export class EditTodoItem extends React.Component {
    render(){
        return(
            <button onClick={this.props.onEdit}>Edit</button>
        );
    }
}