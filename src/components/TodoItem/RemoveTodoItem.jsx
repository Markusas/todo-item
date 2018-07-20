import * as React from "react";

export class RemoveTodoItem extends React.Component {
    render(){
        return(
            <button onClick={this.props.onRemove}>Remove</button>
        );
    }
}