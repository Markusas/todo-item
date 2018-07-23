// @flow
import * as React from "react";

type PriorityBadgeProps = {
    priority: TodoItemPriority
}

export class PriorityBadge extends React.Component<PriorityBadgeProps> {
    render(){
        return(
            <span>{this.props.priority}</span>
        );
    }
}