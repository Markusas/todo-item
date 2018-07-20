import * as React from "react";
import "../styles/header.css";

export class Header extends React.Component {
    render() {
        return(
            <div className="todo-header">
                <h1>TODO APP</h1>
            </div>
        );
    }
}